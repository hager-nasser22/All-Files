import java.io.*;
import java.util.*;

public class Excel {

    public static void main(String[] args) {
        List<Country> countries = loadCountries("Countries.csv");
        List<City> cities = loadCities("Cities.csv");

        Map<String, City> highestPopulatedCities = findHighestPopulatedCityOfEachCountry(cities);
        System.out.println("\n first  (the highest populated city of each country)");
        for (Map.Entry<String, City> entry : highestPopulatedCities.entrySet()) {
            System.out.println("Country===>> " + entry.getKey() + ", City===>>" + entry.getValue().getName() + ", Population===>> " + entry.getValue().getPopulation());
        }
        
        System.out.println("\n  second (the most populated country of each continent)");
        Map<String, Country> mostPopulatedCountries = findMostPopulatedCountryOfEachContinent(countries);
        System.out.println("\nMost populated country of each continent:");
        for (Map.Entry<String, Country> entry : mostPopulatedCountries.entrySet()) {
            System.out.println("Continent===>>" + entry.getKey() + ", Country===>> " + entry.getValue().getName() + ", Population===>> " + entry.getValue().getPopulation());
        }
        
        City highestPopulatedCapitalCity = findHighestPopulatedCapitalCity(cities, countries);
        System.out.println("\n  third (the highest populated capital city)");
        System.out.println("City: " + highestPopulatedCapitalCity.getName() + ", Population: " + highestPopulatedCapitalCity.getPopulation());
    }

    
    public static List<Country> loadCountries(String fileName) {
        List<Country> countries = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(fileName))) {
            String line = br.readLine(); 
            while ((line = br.readLine()) != null) {
                String[] data = line.split(",");
                countries.add(new Country(
                        data[0], 
                        data[1], 
                        data[2],  
                        Double.parseDouble(data[3]),  
                        Integer.parseInt(data[4]),   
                        Double.parseDouble(data[5]),
                        Integer.parseInt(data[6])     
                ));
            }
        } catch (FileNotFoundException e) {
            System.err.println("File not found: " + fileName);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (NumberFormatException e) {
            System.err.println("Error parsing number: " + e.getMessage());
        }
        return countries;
    }
    
    public static List<City> loadCities(String fileName) {
        List<City> cities = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(fileName))) {
            String line = br.readLine(); 
            while ((line = br.readLine()) != null) {
                String[] data = line.split(",");
                cities.add(new City(
                        Integer.parseInt(data[0]),
                        data[1],
                        Integer.parseInt(data[2]),
                        data[3]
                ));
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return cities;
    }

    
    public static Map<String, City> findHighestPopulatedCityOfEachCountry(List<City> cities) {
        Map<String, City> cityMap = new HashMap<>();
        for (City city : cities) {
            if (!cityMap.containsKey(city.getCountryCode()) || cityMap.get(city.getCountryCode()).getPopulation() < city.getPopulation()) {
                cityMap.put(city.getCountryCode(), city);
            }
        }
        return cityMap;
    }

    public static Map<String, Country> findMostPopulatedCountryOfEachContinent(List<Country> countries) {
        Map<String, Country> continentCountryMap = new HashMap<>();
        for (Country country : countries) {
            if (!continentCountryMap.containsKey(country.getContinent()) || continentCountryMap.get(country.getContinent()).getPopulation() < country.getPopulation()) {
                continentCountryMap.put(country.getContinent(), country);
            }
        }
        return continentCountryMap;
    }

    public static City findHighestPopulatedCapitalCity(List<City> cities, List<Country> countries) {
        Map<Integer, Country> capitalCountryMap = new HashMap<>();
        for (Country country : countries) {
            capitalCountryMap.put(country.getCapital(), country);
        }

        City highestPopulatedCapital = null;
        for (City city : cities) {
            if (capitalCountryMap.containsKey(city.getId())) {
                if (highestPopulatedCapital == null || city.getPopulation() > highestPopulatedCapital.getPopulation()) {
                    highestPopulatedCapital = city;
                }
            }
        }

        return highestPopulatedCapital;
    }
}
