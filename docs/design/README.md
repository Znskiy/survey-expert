# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 

@startuml
entity User #eeffff
entity User.Name 
entity Email
entity Password
entity Salt
entity Authorization_Token

entity Organization #eeffff
entity Organization.Name
entity Organization.Creation_date
entity Creator #aaaeee
entity Organization.Description #aaaeee
entity Picture #aaaeee 
entity Address #aaaeee
entity Poll

entity PollType #eeffff
entity PollType.Name
entity PollType.Description #aaaeee

entity BlackListedUser #eeffff
entity BL_User
entity BL_Poll 

entity WhiteListedUser #eeffff
entity WL_User
entity WL_Poll 

entity Poll #eeffff
entity Poll.Title
entity Poll.Description
Entity Poll.CreationDate
entity End_Date
entity IsWhiteList
entity IsBlackList
entity IsPrivate
entity Link
entity Poll.Type


entity QuestionType #eeffff
entity QuestionType.Name
entity QuestionType.Description

entity AnswerOption #eeffff
entity Text
entity Index

entity Question #eeffff
entity Question.Title
entity Question.Description
entity Question.Type


entity Answer #eeffff
entity Content

entity PollResult #eeffff
entity Date
entity PR_Comment #aaaeee
entity Respondent


entity QuestionFeedback #eeffff
entity QF_Comment
entity QF_Question

entity PollFeedback #eeffff
entity GeneralComment
entity Rating #aaaeee
entity MaxRating #aaaeee
entity Reviewer
entity PF_Poll



User.Name --* User
Email -r-* User
Password --* User
Salt -l-* User
Authorization_Token -u-* User
Poll "0,*"--*"0,*" User
Organization "0,*"--*"1,*" User
PollFeedback "0,*"--*"1" User

Organization.Name -l-* Organization
Organization.Creation_date -u-* Organization
Creator *-d-* Organization
Organization.Description --* Organization
Picture -d-* Organization
Address -r-* Organization
Poll "0,*"--*"1" Organization

PollType.Name -u-* PollType
PollType.Description --* PollType

BlackListedUser -u-* BL_User
BlackListedUser --* BL_Poll
BlackListedUser "1"--"0,*" User
BlackListedUser "1"--"0,*" Organization
WhiteListedUser -u-* WL_User
WhiteListedUser --* WL_Poll
WhiteListedUser "1"--"0,*" User
WhiteListedUser "1"--"0,*" Organization

Poll.Title -u-* Poll
Poll.Description -u-* Poll
Poll.CreationDate --* Poll
End_Date --* Poll
IsWhiteList --* Poll
IsBlackList -l-* Poll
IsPrivate -r-* Poll
Link -u-* Poll
Poll.Type -d-* Poll
Question "1"--*"1,*" Poll

QuestionType.Name -u-* QuestionType 
QuestionType.Description -d-* QuestionType
QuestionType -- Question
QuestionType -- Answer

Text --* AnswerOption
Index --* AnswerOption

AnswerOption --* Question
Question --* Question.Type
Title --* Question.Title
Question.Description --* Question
AnswerFeedback "0,*"--*"1,*" Question

Answer --* Content
Answer --* Question

Date --* PollResult
Comment --* PollResult
Respondent --* PollResult
Answer "1,*"--*"1" PollResult

QF_Comment --* QuestionFeedback
QuestionFeedback *--* QF_Question

GeneralComment --* PoolFeedback
Rating --* PollFeedback
MaxRating --* PollFeedback
Reviewer -u-* PollFeedback
PF_Poll -u-* PollFeedback
QuestionFeedback "0,*"--*"1,*" PollFeedback

@enduml

- ER-модель

@startuml

entity User <<ENTITY>>{
    Name: TEXT
    Email: TEXT
    Password: TEXT
    Salt: TEXT
    Authorization_Token: TEXT
}

entity Organization <<ENTITY>>{
    Name: TEXT
    Creation_date: DATE
    Creator: TEXT
    Description: TEXT
    Picture: IMAGE
    Address: TEXT
}

entity BlackListedUser <<ENTITY>>{
    BL_User: TEXT
    BL_Poll: TEXT
}

entity WhiteListedUser <<ENTITY>>{
    WL_User: TEXT
    WL_Poll: TEXT
}

entity Poll <<ENTITY>>{
    Title: TEXT
    Description: TEXT
    CreationDate: DATE
    End_Date: TEXT
    IsWhiteList: BOOL
    IsBlackList: BOOL
    IsPrivate: BOOL
    Link: TEXT
    Type: TEXT
}

entity Question <<ENTITY>>{
    Title: TEXT
    Description: TEXT
    Type: TEXT
}

entity Answer <<ENTITY>>{
    Content: TEXT
    Question: TEXT
    QuestionType: TEXT
}

entity PollResult <<ENTITY>>{
    Date: DATE
    PR_Comment: TEXT
    Respondent: TEXT
}

entity QuestionFeedback <<ENTITY>>{
    QF_Comment: TEXT
    QF_Qeustion: TEXT
}

entity PollFeedback <<ENTITY>>{
    GeneralComment: TEXT
    Rating: NUMBER
    MaxRating: NUMBER
    Reviewer: TEXT
    PF_Poll: TEXT
}

Poll "0,*"--*"0,*" User
Organization "0,*"--*"1,*" User
PollFeedback "0,*"--*"1" User

Poll "0,*"--*"1" Organization

BlackListedUser "1"--"0,*" User
BlackListedUser "1"--"0,*" Organization

WhiteListedUser "1"--"0,*" User
WhiteListedUser "1"--"0,*" Organization


Question "1"--*"1,*" Poll

Answer "1,*"--*"1" PollResult


QuestionFeedback "0,*"--*"1,*" PollFeedback

@enduml
  
- реляційна схема
