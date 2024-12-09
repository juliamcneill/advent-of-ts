type Status = "naughty" | "nice";

type Child = {
  name: string;
  status: Status;
};

type List = Child[];

declare module "santas-special-list" {
  export const Status: Status;
  export const Child: Child;
  export const List: List;
}
