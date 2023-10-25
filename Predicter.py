import numpy as np
import pandas as pd
import warnings
from pmdarima import auto_arima
from statsmodels.tsa.arima.model import ARIMA

warnings.filterwarnings('ignore')

location = input("Enter file location\n")
n = int(input("Number of future predictions\n"))
newlocation = input("Location for new file\n")

data = pd.read_csv(location, index_col='Date', parse_dates=True, date_parser=lambda x: pd.to_datetime(x, format='%d-%m-%Y'))

stepwise_fit = auto_arima(data['Average of OEE VALUE'], trace=True, suppress_warnings=True)
best_order = stepwise_fit.get_params()['order']

model=ARIMA(data['Average of OEE VALUE'], order=best_order)
model=model.fit()

start=len(data)
end=start + n -1

pred=np.round( model.predict(start=start,end=end).rename('Average of OEE VALUE') , 2 )
pred = pd.concat([data.tail(12), pd.DataFrame(pred)], axis=0)
pred.index.name = 'Date'
pred.to_csv(newlocation)
