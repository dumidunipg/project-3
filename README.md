# project-3

# Emissions Dashboard

## Sea Temperature

*The rise in the sea temperature has largely been a result of an increase in greenhouse gas emissions, which trap the sun's heat within the atmosphere. Recent calls for actions to reduce climate change stem partly from sea surface temperature data such as the ones in 2015 and 2018. Although the typical trend is where the temperature peaks around April and slowly decreases towards the end of the year, the two years within the last decade illustrate that the sea surface temperature continued to increase. The **Sustainable Development Goal 13 from the United Nations General Assembly in 2015 and the *^movement led by environmental activist Greta Thunberg in 2018 played a role in decreasing the sea surface temperatures in the following years. The annual average temperatures are on a downward trend since 2019, and although there is no data for December yet, the upward trend and a fairly significant increase in the average temperature for 2023 is another alarming sign for our environment.

### References

*[United Nations: What Is Climate Change?](https://www.un.org/en/climatechange/what-is-climate-change)  
**[Sustainable Development Goal 13](https://www.un.org/sustainabledevelopment/climate-action/)  
*^[Biography: Greta Thunberg](https://www.britannica.com/biography/Greta-Thunberg)

## CO2 Concentration

### What is CO2 ppm

CO2 in ppm (parts per million) refers to the number of carbon dioxide molecules per million molecules of dry air (*).

### The Dataset
The annual CO2 [ppm] is calculated based on the monthly CO2 measurement taken in the Mauna Loa Observatory in Hawaii from March 1958 to September 2023 (**). In 1958, the first year that the Mauna Loa Observatory measured CO2, the annual average was 315 [ppm] of CO2. So far for 2023, the average Co2 measured was 421 [ppm] of Co2. 

In the past 65 years, the average CO2 increased by 107 [ppm]. However, the increase in the average Co2 per year was not linear. In 2014, the average was 399 of Co2 [ppm], which means that it took 9 years for the annual average to increase by 22 [ppm] of Co2. In comparison, it took 21 years from 1958 to 1979 for an annual average to increase by 22 [ppm] of Co2.

### Why this matters?
CO2 is one of the major greenhouse gases, gases that absorb and reflect heat in the atmosphere. As the amount of CO2 in the atmosphere increases, more heat is stored in the atmosphere, and more heat is reflected onto the Earth's surface. "According to observations by the NOAA Global Monitoring Lab, in 2021, carbon dioxide alone was responsible for about two-thirds of the total heating influence of all human-produced greenhouse gases."(***).

Data Citation: 

\* [NASA: Carbon Dioxide](https://climate.nasa.gov/vital-signs/carbon-dioxide/)

** [Scripps CO2 Program: Primary Mauna Loa CO2 Record ](https://scrippsco2.ucsd.edu/data/atmospheric_co2/primary_mlo_co2_record.html)

C. D. Keeling, S. C. Piper, R. B. Bacastow, M. Wahlen, T. P. Whorf, M. Heimann, and H. A. Meijer, Exchanges of atmospheric CO2 and 13CO2 with the terrestrial biosphere and oceans from 1978 to 2000. I. Global aspects, SIO Reference Series, No. 01-06, Scripps Institution of Oceanography, San Diego, 88 pages, 2001.

*** [Climate Change: Atmospheric Carbon Dioxide](https://www.climate.gov/news-features/understanding-climate/climate-change-atmospheric-carbon-dioxide)

## Air Quality Index

### PM2.5, PM10, NO2
#### What are they?
- Particles in the air can be defined by their diameter. Particles that are 10 microns or smaller can be inhaled and can negatively impact health and may cause issues that include but not limited to heart disease, asthma, and low birth weight.
- They are derived from fossil fuels and may also come from natural sources such as dust storms or forest fires.
- These fine particles remain in the air for long periods of time and can travel hundreds of miles

#### The Dataset
- This data comes from WHO (World Health Organization) and involves many countries. The focus of this dataset were the concentrations of PM2.5, PM10, and NO2.
- Some limitations that were encountered was that there were many N/A values and c3 json is not able to handle undefined values when plotting the data. Therefore, the undefined values were converted to 0s which has impacted the averages of the data.
- However, from the data, we can see a general trend downward of all three pollutants
- The highest concentration of pollutants are from PM10 particles. Once we remove that dataset, we are able to see that the data for PM2.5 and NO2 starts around 2008.
- There is a dramatic decrease in PM2.5 from 2008 to 2010 from which point there is a steady rise and then a dip.
- 2022 data may not all be present in the dataset which has resulted in the dip for 2022
- There is an increase in PM2.5 in 2018. While this data is for many countries, if we consider events in 2018 that may have contributed to the rise in PM2.5 particles for the US at least, according to sources there was a decrease in the enformcement of the Clean Air Act which may have contributed to the rise in pollution. 

#### How to get rid of these toxins in your everyday life?
- Eat more foods in fiber which help your body to get rid of these toxins
- An air purifier with a Hepa filter may also help reduce some of these harmful particles. 

### Resources:
- [NY Times: Air-Pollution Increase](https://www.nytimes.com/interactive/2019/10/24/climate/air-pollution-increase.html)
- [California Air Resources Board: Inhalable Particulate Matter and Health (PM2.5 and PM10)](https://ww2.arb.ca.gov/resources/inhalable-particulate-matter-and-health#:~:text=Particles%20are%20defined%20by%20their,5.) 
- [NCBI: Recent Insights into Particulate Matter (PM2.5)-Mediated Toxicity in Humans: An Overview](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9223652/#:~:text=Primary%20PM2.5%20particles%20which,cigarette%20smoke%2C%20and%20biomass%20burning.)
- [WHO: Ambient Air Pollution](https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health)
- [WHO: Ambient Air Quality Database, 2022](https://www.who.int/publications/i/item/9789240047693)
