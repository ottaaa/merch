export type Properties<T> = {
  [K in keyof T]: T[K] extends Function ? never : T[K];
};

type Filter<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

export type PrismaToModel<T> = Omit<T, 'id' | Filter<T, Date | null>>;
export type PrismaToModelWithout<T, U extends string> = Omit<T, 'id' | Filter<T, Date | null> | U>;

// type Simplify<T> = T extends any ? { [P in keyof T]: T[P] } : never;

// type Simplified = Simplify<Properties<MerchModel>>;
