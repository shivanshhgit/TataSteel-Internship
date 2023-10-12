import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
import warnings
warnings.filterwarnings('ignore', category=UserWarning)

location = input("Enter file location\n")
n = int(input("Number of future predictions\n"))
newlocation = input("Location for new file\n")

data = pd.read_csv(location)
X = data[[data.columns[0]]]
y = data[[data.columns[1]]]

model = LinearRegression()
model.fit(X, y)
year = []
new_value = []

for i in range(1,n+1):
    future_year = (X.iloc[-1].values[0])+i
    predicted_value = np.round(model.predict([[future_year]])[0][0] , 2)
    year.append(future_year)
    new_value.append(predicted_value)
    
prediction_data = pd.DataFrame({data.columns[0]: year, data.columns[1]: new_value})
prediction_data.to_csv(newlocation, index=False)
