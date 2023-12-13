# project-3

# Emissions Dashboard

## Sea Temperature

analysis here

## CO2 Concentration

analysis here

## Air Quality Index

### PM2.5, PM10, NO2
#### What are they?
- Particles in the air can be defined by their diameter. Particles that are 10 microns or smaller can be inhaled and can negatively impact health and may cause issues that include but not limited to heart disease, asthma, and low birth weight.
- They are derived from fossil fuels and may also come from natural sources such as dust storms or forest fires.
- These fine particles remain in the air for long periods of time and can travel hundreds of miles

#### The Dataset
- This data comes from WHO (World Health Organization) and involves many countries. The focus of this dataset were the concentrations of PM2.5, PM10, and NO2.
- Some limitations that were encountered was that there were many N/A values and c3 json is not able to handle undefined values when pllotting the data. Therefore, the undefined values were converted to 0s which has impacted the averages of the data.
- However, from the data, we can see a general trend downward of all three pollutants
- The highest concentration of pollutants are from PM10 particles. Once we remove that dataset, we are able to see that the data for PM2.5 and NO2 starts around 2008.
- There is a dramatic decrease in PM2.5 from 2008 to 2010 from which point there is a steady rise and then a dip.
- 2022 data may not all be present in the dataset which has resulted in the dip for 2022
- There is an increase in PM2.5 in 2018. While this data is for many countries, if we consider events in 2018 that may have cotributed to the rise in PM2.5 particles for the US at least, according to sources there was a decrease in the enformcement of the Clean Air Act which may have contributed to the rise in pollution. 

#### How to Get rid of these toxins in your everyday life?
- Eat more foods in fiber which help your body to get rid of these toxins
- An air purifier with a Hepa filter may also help reduce some of these harmful particles. 

### Resources:
- https://www.nytimes.com/interactive/2019/10/24/climate/air-pollution-increase.html
- https://ww2.arb.ca.gov/resources/inhalable-particulate-matter-and-health#:~:text=Particles%20are%20defined%20by%20their,5).
- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9223652/#:~:text=Primary%20PM2.5%20particles%20which,cigarette%20smoke%2C%20and%20biomass%20burning.
