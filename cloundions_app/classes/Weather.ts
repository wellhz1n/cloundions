


class Weather {
    temp: number;
    description: string;
    city_name: string;
    condition_slug: ConditionSlug
    forecast: Forecast[];


    constructor() {
    }
}


class Forecast {
    date: string;
    weekday: string;
    max: number;
    min: number;
    description: string;
    condition: ConditionSlug;
    constructor() {
    }
}


enum ConditionSlug {
    storm = "storm",
    snow = "snow",
    hail = "hail",
    rain = "rain",
    fog = "fog",
    clear_day = "clear_day",
    clear_night = "clear_night",
    cloud = "cloud",
    cloudly_day = "cloudly_day",
    cloudly_night = "cloudly_night",
    none_day = "none_day",
    none_night = "none_night"
}



export { Weather, Forecast, ConditionSlug };