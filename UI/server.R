server <- function(input, output) {
  
  # datasets
  twitter_data_filtered <- reactive ({
    data <- as.data.frame(data)
    language_filter <- input$LanguageInput
    # sector filter 
    if (language_filter=="English"){
      index <- which(data$language=="en")
    }
    if (language_filter=="French"){
      index <- which(data$language=="fr")
    }
    if (language_filter=="Kinyarwanda"){
      index <- which(data$language=="kr")
    }
    data_final <- data[index,c(4,2,3,5,6,7,8)]
  })
  
  output$display_text <- reactive ({
    category <- input$CategoryInput
    endpoint_to_call <- get_endpoint(category)
    text <- get_API_data(base, endpoint_to_call)
    print(text$text)
    text$text
  })

  output$tweets_table <- DT::renderDataTable(
    twitter_data_filtered(),
    rownames = FALSE,
    options = list(
      autoWidth = TRUE,
      pageLength = 10))
}