ui <- dashboardPage(
  dashboardHeader(title = "Rwanda Updates"),
  dashboardSidebar(
    width = 300,
    sidebarMenu(
      menuItem("Officiel Twitter Information", tabName = "twitter"),
      menuItem("Ministry of Education Information", tabName = "ministry")
    )
  ),
  dashboardBody(
    tags$style(type="text/css", "div.info.legend.leaflet-control br {clear: both;}",
               HTML(".dataTables_wrapper .dataTables_length {
                  float: right; padding: 20px;}
                    .dataTables_wrapper .dataTables_filter {
                    float: left;
                    text-align: left;}
                    
                    .box.box-solid.box-primary>.box-header {
                    color:#fff;
                    background:#55A7DF
                    }
                    
                    .box.box-solid.box-primary{
                    border-bottom-color:#55A7DF;
                    border-left-color:#55A7DF;
                    border-right-color:#55A7DF;
                    border-top-color:#55A7DF;
                    }
                    }"
               )),
    # First page boxes
    tabItems(
      tabItem(tabName = "twitter",
                         fluidRow(
                           br(),
                             h4("The table below contains Tweets from the Ministry of Education (@Rwanda_Edu) and the Rwanda Education Board (@REBRwanda)"),
                             br(),
                             selectInput("LanguageInput", "Select a language:", list(
                               "Kinyarwanda",
                               "English",
                               "French"
                             ), selected = "Kinyarwanda" ),
                             br(),
                             DT::dataTableOutput("tweets_table")
                           )
                          ),
      tabItem(tabName = "ministry",
                        fluidRow(
                          br(),
                          h4("The information below was released by the Ministry of Education, Republic of Rwanda"),
                          br(),
                          selectInput("CategoryInput", "Select a topic:", list(
                            "School Reopening",
                            "Disbursements",
                            "Fees",
                            "Refund",
                            "Recommendations"
                          ), selected = "School Reopening" ),
                          textOutput("display_text")
                          ))
    )
)
)