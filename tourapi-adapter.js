// ===== 한국관광공사 TourAPI 어댑터 (옵션) =====
// 참고: 축제/행사 검색(searchFestival), 세부정보(detailCommon) 등
// 문서(구버전 기준 예시):
//   https://apis.data.go.kr/B551011/KorService1/searchFestival
// 주요 파라미터: serviceKey, eventStartDate, eventEndDate, pageNo, numOfRows, MobileOS, MobileApp, _type=json

(function(){
  const CFG = (window.FESTIVAL_SOURCE_CONFIG || {});
  const BASE = 'https://apis.data.go.kr/B551011/KorService1';

  async function loadFestivalsFromKTO(){
    if (!CFG.ktoApiKey) throw new Error('TourAPI API Key가 설정되지 않았습니다.');

    // 기본 기간
    const start = (CFG.ktoDefaultStart || '20250101');
    const end = (CFG.ktoDefaultEnd || '20261231');
    const rows = CFG.ktoMaxRows || 50;

    const url = `${BASE}/searchFestival?serviceKey=${encodeURIComponent(CFG.ktoApiKey)}&eventStartDate=${start}&eventEndDate=${end}&pageNo=1&numOfRows=${rows}&MobileOS=ETC&MobileApp=festival&_type=json`;
    const json = await getJsonWithOptionalProxy(url);
    const items = json?.response?.body?.items?.item || [];
    const list = items.map(toFestivalRecord).filter(Boolean);
    return list;
  }

  async function getJsonWithOptionalProxy(url){
    // CORS 회피용 프록시가 지정되어 있으면 사용
    const finalUrl = CFG.ktoProxyUrl ? `${CFG.ktoProxyUrl}${encodeURIComponent(url)}` : url;
    const controller = new AbortController();
    const to = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(finalUrl, { signal: controller.signal });
    clearTimeout(to);
    if (!res.ok) throw new Error(`TourAPI 요청 실패: ${res.status}`);
    return await res.json();
  }

  function toFestivalRecord(item){
    // 필드 예시: title, addr1, addr2, eventstartdate, eventenddate, firstimage, mapx, mapy, areacode, sigungucode
    const name = item.title || '';
    if (!name) return null;
    const start = item.eventstartdate; // YYYYMMDD
    const end = item.eventenddate;
    const period = (start && end) ? `${formatDate(start)} ~ ${formatDate(end)}` : '';
    const image = item.firstimage || '';
    const location = [item.addr1, item.addr2].filter(Boolean).join(' ');
    const mapUrl = (item.mapx && item.mapy)
      ? `https://www.google.com/maps?q=${item.mapy},${item.mapx}`
      : 'https://www.google.com/maps';

    return normalizeFestivalRecord({
      id: `kto-${item.contentid || slugify(name)}`,
      name,
      location: location || '대한민국',
      period,
      duration: estimateDuration(start, end),
      priceKRW: '',
      description: item.overview || `${name} 축제`,
      countryCode: 'kr',
      imageQuery: `${name} 축제`,
      fallbackImage: image || `https://source.unsplash.com/featured/?festival,${encodeURIComponent(name)}`,
      mapUrl
    });
  }

  function normalizeFestivalRecord(r){
    const name = r.name || '';
    if (!name) return null;
    const id = (r.id || slugify(name));
    const durationDays = toInt(r.duration) || 5;
    const price = normalizePrice(r.priceKRW);
    const imageQuery = r.imageQuery || `${name} festival`;
    const fallbackImage = r.fallbackImage || `https://source.unsplash.com/featured/?festival,${encodeURIComponent(name)}`;
    const countryCode = (r.countryCode || '').toLowerCase() || undefined;
    return {
      id,
      countryCode,
      name,
      location: r.location || '',
      period: r.period || '',
      duration: `${durationDays}일`,
      price: price,
      target: '전 연령',
      description: r.description || `${name} 관련 대표 축제입니다.`,
      mapUrl: r.mapUrl || 'https://www.google.com/maps/embed',
      imageQuery,
      fallbackImage,
      attractions: [],
      budget: {
        '항공권': 200000,
        '숙박': 300000,
        '식사': 250000,
        '입장료': 80000,
        '교통': 70000,
        '기타': 50000
      },
      tips: { 준비물: [], 주의사항: [], 추천: [] },
      packageDetails: null
    };
  }

  function normalizePrice(v){
    if (!v) return '₩0';
    if (typeof v === 'number') return `₩${Math.max(0, v).toLocaleString()}`;
    const n = parseInt(String(v).replace(/[^0-9]/g, ''), 10) || 0;
    return `₩${n.toLocaleString()}`;
  }

  function toInt(v){
    const n = parseInt(String(v).replace(/[^0-9]/g, ''), 10);
    return Number.isFinite(n) ? n : undefined;
  }

  function slugify(s){
    return String(s).toLowerCase().replace(/[^a-z0-9가-힣]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 60);
  }

  function formatDate(yyyymmdd){
    const s = String(yyyymmdd);
    if (s.length !== 8) return s;
    return `${s.slice(0,4)}-${s.slice(4,6)}-${s.slice(6,8)}`;
  }

  function estimateDuration(start, end){
    const s = String(start||'');
    const e = String(end||'');
    if (s.length===8 && e.length===8){
      const sd = new Date(`${s.slice(0,4)}-${s.slice(4,6)}-${s.slice(6,8)}`);
      const ed = new Date(`${e.slice(0,4)}-${e.slice(4,6)}-${e.slice(6,8)}`);
      const diff = Math.max(1, Math.round((ed - sd) / (1000*60*60*24)) + 1);
      return `${diff}`; // 숫자만 반환(정규화 단계에서 일자 표기)
    }
    return '5';
  }

  // 전역 공개
  window.loadFestivalsFromKTO = loadFestivalsFromKTO;
})();
