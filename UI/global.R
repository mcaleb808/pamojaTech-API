library(jsonlite)
library(DT)
library(httr)
set_config(config(ssl_verifypeer = 0L))
library(shinydashboard)
options(shiny.sanitize.errors = TRUE)
base <- "https:///pamoja-tech.herokuapp.com/api/v1/schools/"

# get_info <- GET(paste("https:///pamoja-tech.herokuapp.com/api/v1/","tweets", sep = ""))
# get_info_json <- fromJSON(content(get_info, "text"), flatten = TRUE)
# data <- get_info_json$data
data <- read.csv("tweets_df.csv", header = TRUE)
data$date <- as.Date(substr(data$date, 1, 10))

get_API_data <- function(base, endpoint){
  # getting the data from the API
  get_info <- GET(paste(base, endpoint, sep=""))
  # parsing content into text and JSON for readability
  get_info_json <- fromJSON(content(get_info, "text"), flatten = TRUE)
  get_info_title <- get_info_json$message
  message <- get_info_json$data$info
  return (list(info = get_info_title,text = message))
}

get_endpoint <- function(category){
  if (category == "School Reopening") {
    endpoint_to_call <- "reopen"}
  else if (category == "Refund"){
    endpoint_to_call <- "fees/refund"
  }
  else if (category == "Recommendations"){
    endpoint_to_call <- "gov/recommendations"
  } else {
    endpoint_to_call <- tolower(category)
  }
  return (endpoint_to_call)
}


