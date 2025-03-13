import java.io.*;
import java.nio.file.*;
import java.util.*;
import java.util.stream.*;
import static java.util.stream.Collectors.toList;

class ExcelReader {

    // تحميل البيانات من الملف
    public static List<String[]> FilePathDelimiter(String path, String delimiter) {
        try {
            return Files.lines(Paths.get(path))
                    .map(line -> line.split(delimiter))
                    .collect(toList());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static void main(String[] args) {
        // تحميل البيانات من ملف الدول
        List<String[]> countries = FilePathDelimiter("Countries.csv", ",");
        System.out.println("************************Countries**********************");
        countries.forEach(country -> System.out.println(Arrays.asList(country)));

        // تحميل البيانات من ملف المدن
        List<String[]> cities = FilePathDelimiter("Cities.csv", ",");
        System.out.println("************************Cities**********************");
        cities.forEach(city -> System.out.println(Arrays.asList(city)));

        // 1. إيجاد المدينة الأكثر سكانًا في كل دولة
        System.out.println("************************Highest Populated City of Each Country**********************");
        Map<String, String[]> highestPopulatedCityOfEachCountry = new HashMap<>();

        for (String[] city : cities) {
            String country = city[1];
            int population = Integer.parseInt(city[2]);

            // إذا كانت المدينة لم تضاف بعد أو إذا كانت هذه المدينة أكثر سكانًا
            highestPopulatedCityOfEachCountry.merge(country, city, (existing, newCity) -> 
                Integer.parseInt(existing[2]) > population ? existing : newCity
            );
        }

        highestPopulatedCityOfEachCountry.forEach((country, city) ->
            System.out.println("Country: " + country + " - Most Populated City: " + Arrays.asList(city))
        );

        // 2. إيجاد الدولة الأكثر سكانًا في كل قارة
        System.out.println("************************Most Populated Country in Each Continent**********************");
        Map<String, String[]> highestPopulatedCountryOfEachContinent = new HashMap<>();

        for (String[] country : countries) {
            String continent = country[2];
            int population = Integer.parseInt(country[3]);

            // إذا كانت الدولة لم تضاف بعد أو إذا كانت هذه الدولة أكثر سكانًا
            highestPopulatedCountryOfEachContinent.merge(continent, country, (existing, newCountry) -> 
                Integer.parseInt(existing[3]) > population ? existing : newCountry
            );
        }

        highestPopulatedCountryOfEachContinent.forEach((continent, country) ->
            System.out.println("Continent: " + continent + " - Most Populated Country: " + Arrays.asList(country))
        );

        // 3. إيجاد العاصمة الأكثر سكانًا
        System.out.println("************************Most Populated Capital City**********************");
        String[] highestPopulatedCapitalCity = cities.stream()
                .filter(city -> city[3].equals(city[1])) // assuming the capital is the first city in the list for the country
                .max(Comparator.comparingInt(city -> Integer.parseInt(city[2])))
                .orElse(null);

        if (highestPopulatedCapitalCity != null) {
            System.out.println("Most Populated Capital City: " + Arrays.asList(highestPopulatedCapitalCity));
        } else {
            System.out.println("No capital city found.");
        }
    }
}
