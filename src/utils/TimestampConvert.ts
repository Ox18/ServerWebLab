import Months from "./Months";

interface IOrderByProperties {
  day: string;
  month: string;
  year: string;
  dayWithMonth: string;
}

class TimestampConvert {
  public static toString(timestamp: String): IOrderByProperties {
    return TimestampConvert.orderByProperties(
      TimestampConvert.descompressTimestamp(timestamp)
    );
  }

  public static descompressTimestamp(timestamp: String): String {
    return timestamp.split(" ")[0];
  }

  public static orderByProperties(time: String): IOrderByProperties {
    const [day, month, year] = time.split("/");
    const dayWithMonth = Months.getByMonth(Number(month) - 1) + " " + day;
    return {
      day,
      month,
      year,
      dayWithMonth,
    };
  }
}

export default TimestampConvert;
