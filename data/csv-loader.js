// CSV에서 축제 데이터를 불러와 festivalsData에 병합합니다.
import { parseCsv, slugify } from '../utils/utils.js';
import { festivalsData } from './festivals.js';

/**
 * CSV 레코드를 festivalsData 포맷으로 매핑
 */
function mapRowToFestival(row) {
  const toNumber = (v) => {
    const n = parseInt(String(v).replace(/[^\d]/g, ''), 10);
    return Number.isFinite(n) ? n : 0;
  };

  const priceNum = toNumber(row.priceKRW);
  const priceStr = priceNum ? `₩${new Intl.NumberFormat('ko-KR').format(priceNum)}` : '문의';

  return {
    id: row.id || slugify(row.name || ''),
    countryCode: (row.countryCode || '').toLowerCase(),
    name: row.name || '이름 미정',
    location: row.location || '위치 미정',
    period: row.period || '미정',
    duration: row.duration || '5일',
    price: priceStr,
    description: row.description || '',
    image: row.image || '',
    imageQuery: row.imageQuery || '',
    fallbackImage: row.fallbackImage || '',
    mapUrl: row.mapUrl || '',
    flightPrice: toNumber(row.flightPrice),
    flightDuration: row.flightDuration || '',
    flightAirline: row.flightAirline || ''
  };
}

/**
 * CSV를 불러와 festivalsData에 병합
 * - 기본적으로 기존 id가 존재하면 스킵하여 큐레이션 데이터 보호
 * - 스킵/추가/총계 요약을 콘솔에 출력
 */
export async function loadCsvAndMerge(url = '/data/festivals.sample.csv') {
  try {
    const res = await fetch(url, { cache: 'no-cache' });
    if (!res.ok) throw new Error(`CSV fetch failed: ${res.status}`);
    const text = await res.text();
    const rows = parseCsv(text);

    const before = Object.keys(festivalsData).length;
    let added = 0;
    let skipped = 0;
    const skippedIds = [];

    for (const row of rows) {
      const mapped = mapRowToFestival(row);
      if (!mapped.id) continue;
      if (festivalsData[mapped.id]) {
        skipped++;
        skippedIds.push(mapped.id);
        continue; // 기존 데이터 보존
      }
      festivalsData[mapped.id] = mapped;
      added++;
    }

    const after = Object.keys(festivalsData).length;
    const logger = (typeof window !== 'undefined' && window.logger) ? window.logger : console;
    logger.info(`CSV 병합 완료: 기존 ${before}개 → 추가 ${added}개 (스킵 ${skipped}개) → 총 ${after}개`);
    if (skippedIds.length) {
      logger.debug('스킵된 중복 ID:', skippedIds.join(', '));
    }
    return { before, added, skipped, after, skippedIds };
  } catch (e) {
    const logger = (typeof window !== 'undefined' && window.logger) ? window.logger : console;
    logger.warn('CSV 병합 실패:', e.message);
    return { before: Object.keys(festivalsData).length, added: 0, skipped: 0, after: Object.keys(festivalsData).length, skippedIds: [] };
  }
}
