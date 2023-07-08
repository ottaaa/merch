import { Transform } from 'class-transformer';

/**
 * 文字列の'true', 'false' をそれぞれ真偽値に変換する。
 * 上記以外の場合はそのまま返す。
 *
 * @param defaultValue デフォルト値
 */
export const ToBoolean = (defaultValue?: boolean) =>
  Transform(({ value }) => {
    if (value === undefined && defaultValue !== undefined) return defaultValue;
    if (['true', 'false'].includes(value)) return value === 'true';
    return value;
  });
