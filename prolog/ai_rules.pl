% ===========================================================
% ConnectLanka AI Travel Recommendation Rules
% travel_recommendations(+Budget, +Interest, -Destination, -Hotel, -Transport)
% ===========================================================

% -------------------------------
% FACTS: destination(Name, Interest, MinBudget, Hotel, Transport)
% -------------------------------

% ----------- BEACH DESTINATIONS ---------
destination('Mirissa', beach, 40000, 'Sea Breeze Resort', 'Private Car').
destination('Unawatuna', beach, 25000, 'Golden Beach Hotel', 'Taxi').
destination('Bentota', beach, 30000, 'Sunset Resort', 'Bus').
destination('Hikkaduwa', beach, 20000, 'Coral Beach Hotel', 'Taxi').
destination('Nilaveli', beach, 35000, 'Ocean View Resort', 'Private Car').

% ----------- ADVENTURE DESTINATIONS ---------
destination('Ella', adventure, 20000, 'Mountain View Inn', 'Van / Tuk Tuk').
destination('Haputale', adventure, 15000, 'Hilltop Adventure Lodge', 'Jeep').
destination('Kitulgala', adventure, 18000, 'Adventure Stay', 'Jeep').
destination('Nuwara Eliya', adventure, 25000, 'Hill Valley Inn', 'Van').

% ----------- CULTURE DESTINATIONS ---------
destination('Kandy', culture, 10000, 'Heritage Hotel', 'Bus / Car').
destination('Anuradhapura', culture, 8000, 'Ancient City Inn', 'Taxi').
destination('Polonnaruwa', culture, 12000, 'Historical Stay', 'Van').
destination('Sigiriya', culture, 15000, 'Lion Rock Inn', 'Jeep').
destination('Dambulla', culture, 10000, 'Golden Temple Hotel', 'Van').

% ----------- NATURE DESTINATIONS ---------
destination('Nuwara Eliya', nature, 15000, 'Green Hills Hotel', 'Train').
destination('Haputale', nature, 14000, 'Horizon Inn', 'Van / Tuk Tuk').
destination('Ella', nature, 20000, 'Mountain Breeze Hotel', 'Van').
destination('Knuckles Range', nature, 18000, 'Knuckles Inn', 'Jeep').
destination('Sinharaja Forest', nature, 16000, 'Rainforest Lodge', 'Van').

% ----------- WILDLIFE DESTINATIONS ---------
destination('Yala', wildlife, 20000, 'Safari Lodge', 'Jeep Safari').
destination('Udawalawe', wildlife, 18000, 'Elephant Safari Resort', 'Jeep Safari').
destination('Wilpattu', wildlife, 15000, 'Wilpattu Safari Inn', 'Jeep').
destination('Minneriya', wildlife, 16000, 'Elephant Watch Lodge', 'Jeep').
destination('Bundala', wildlife, 14000, 'Bird Paradise Lodge', 'Van').

% -------------------------------
% RULE: travel_recommendations
% Returns all destinations that match the budget and interest
% -------------------------------
travel_recommendations(Budget, Interest, Destination, Hotel, Transport) :-
    destination(Destination, Interest, MinBudget, Hotel, Transport),
    Budget >= MinBudget.

% -------------------------------
% DEFAULT FALLBACK
% In case no options match, suggest Colombo
% -------------------------------
travel_recommendations(_, _, 'Colombo', 'City Hotel', 'Taxi').
