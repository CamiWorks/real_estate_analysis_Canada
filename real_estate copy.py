import requests


# REAL ESTATE CALL API


my_xkey = "" #PASTE YOUR KEY HERE

# Retrieving demographic information
def get_demographic_information(latitude, longitude):
    url = "https://realty-in-ca1.p.rapidapi.com/properties/get-demographics"

    querystring = {"lng": longitude, "lat": latitude}

    headers = {
        "X-RapidAPI-Key": my_xkey,
        "X-RapidAPI-Host": "realty-in-ca1.p.rapidapi.com",
    }

    demo_response = requests.get(url, headers=headers, params=querystring)

    return demo_response.json()


# Get-score the scores
def get_scores_information(latitude, longitude):
    url = "https://realty-in-ca1.p.rapidapi.com/properties/get-scores"

    querystring = {"lng": longitude, "lat": latitude, "locale": "en"}

    headers = {
        "X-RapidAPI-Key": my_xkey,
        "X-RapidAPI-Host": "realty-in-ca1.p.rapidapi.com",
    }

    score_response = requests.get(url, headers=headers, params=querystring)

    return score_response.json()


# Get list of residential real estate
def get_residential_estate(max_latitude, min_latitude, max_longitude, min_longitude):

    url = "https://realty-in-ca1.p.rapidapi.com/properties/list-residential"

    querystring = {
        "LatitudeMax": max_latitude,
        "LatitudeMin": min_latitude,
        "LongitudeMax": max_longitude,
        "LongitudeMin": min_longitude,
        "CurrentPage": "1",
        "RecordsPerPage": "49",
        "SortOrder": "A",
        "SortBy": "11",
        "CultureId": "1",
        "BedRange": "0-0",
        "BathRange": "0-0",
        "PriceMin": "150000",
        "RentMin": "0",
        "TransactionTypeId": "2",
    }

    headers = {
        "X-RapidAPI-Key": my_xkey,
        "X-RapidAPI-Host": "realty-in-ca1.p.rapidapi.com",
    }

    residential_response = requests.get(url, headers=headers, params=querystring)

    return residential_response.json()


# THE IMPLEMENTATION OF COMMERCIAL REAL ESTATE IS STILL UNDER REVIEW TO CUT ANY CORNER-CASE

# # Get list of Commercial real estate
# def get_commercial_estate(max_latitude, min_latitude, max_longitude, min_longitude):

#     url = 'https://realty-in-ca1.p.rapidapi.com/properties/list-commercial'

#     querystring = {'LatitudeMax':max_latitude,'LongitudeMin':min_latitude,'LongitudeMax':max_longitude,'LatitudeMin':min_longitude,'CurrentPage':'1','RecordsPerPage':'40','SortOrder':'A','NumberOfDays':'0','BedRange':'0-0','CultureId':'1','BathRange':'0-0','SortBy':'1','TransactionTypeId':'2'}

#     headers = {
#         'X-RapidAPI-Key': my_xkey,
#         'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com'
#     }

#     Commercial_response = requests.get(url, headers=headers, params=querystring)

#     return Commercial_response.json()
