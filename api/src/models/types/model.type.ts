type Filter<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

// eslint-disable-next-line
type AnyFunction = (...args: any[]) => any;

type KeysOfType<T, S> = {
  [key in keyof T]: S extends T[key] ? key : never;
}[keyof T];

type UndefinedToOptional<T> = Omit<T, KeysOfType<T, undefined>> & Partial<Pick<T, KeysOfType<T, undefined>>>;

/**
 * オブジェクトのフィールドのみを抽出した型
 */
export type Fields<T> = UndefinedToOptional<Omit<T, KeysOfType<T, AnyFunction>>>;

/**
 * PrismaのModelからサロゲートキー（id）を除いた型
 */
export type PrismaObjectToEntity<T> = Omit<T, 'id' | Filter<T, Date | null>>;
export type PrismaObjectToEntityWithout<T, U extends string> = Omit<T, 'id' | Filter<T, Date | null> | U>;
