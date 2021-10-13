class Months {
  public static getByMonth(month: number): string {
    return Months.onlyFirsstThreeLetter()[month];
  }

  public static onlyFirsstThreeLetter(): string[] {
    return Months.names.map((name) => name.substring(0, 3));
  }

  public static names: String[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
}

export default Months;
