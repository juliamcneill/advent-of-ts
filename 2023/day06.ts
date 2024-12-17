type Status = "naughty" | "nice";
type FilterChildrenBy<L , S> = Exclude<L, S>;
