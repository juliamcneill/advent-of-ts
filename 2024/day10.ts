enum Gift {
  Coal = 0,
  Train = 1,
  Bicycle = 2,
  SuccessorToTheNintendoSwitch = 1 << 2,
  TikTokPremium = 1 << 3,
  Vape = 1 << 4,
  Traditional = Train | Bicycle,
  OnTheMove = Coal | Bicycle | TikTokPremium | Vape,
  OnTheCouch = (OnTheMove & ~Bicycle) | SuccessorToTheNintendoSwitch,
}
