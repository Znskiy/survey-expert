# Проєктування бази даних

В рамках проекту розробляється:

## Модель бізнес-об'єктів

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
entity Poll.Type #eeffff

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

User.Name --_ User
Email -r-_ User
Password --_ User
Salt -l-_ User
Authorization_Token -u-_ User
Poll "0,_"--_"0,_" User
Organization "0,_"--_"1,_" User
PollFeedback "0,_"--\*"1" User

Organization.Name -l-_ Organization
Organization.Creation_date -u-_ Organization
Creator _-d-_ Organization
Organization.Description --_ Organization
Picture -d-_ Organization
Address -r-_ Organization
Poll "0,_"--\*"1" Organization

PollType.Name -u-_ Poll.Type
PollType.Description --_ Poll.Type

BlackListedUser -u-_ BL_User
BlackListedUser --_ BL_Poll
BlackListedUser "1"--"0,_" User
BlackListedUser "1"--"0,_" Organization
WhiteListedUser -u-_ WL_User
WhiteListedUser --_ WL_Poll
WhiteListedUser "1"--"0,_" User
WhiteListedUser "1"--"0,_" Organization

Poll.Title -u-_ Poll
Poll.Description -u-_ Poll
Poll.CreationDate --_ Poll
End_Date --_ Poll
IsWhiteList --_ Poll
IsBlackList -l-_ Poll
IsPrivate -r-_ Poll
Link -u-_ Poll
Poll.Type -d-_ Poll
Question "1"--_"1,\*" Poll

QuestionType.Name -u-_ QuestionType
QuestionType.Description -d-_ QuestionType
QuestionType -- Question
QuestionType -- Answer

Text --_ AnswerOption
Index --_ AnswerOption

AnswerOption --_ Question
Question --_ Question.Type
Question.Title --_ Question
Question.Description -l-_ Question
AnswerFeedback "0,_"--_"1,\*" Question

Answer --_ Content
Answer --_ Question

Date --_ PollResult
Comment --_ PollResult
Respondent --_ PollResult
Answer "1,_"--\*"1" PollResult

QF_Comment --_ QuestionFeedback
QuestionFeedback _--\* QF_Question

GeneralComment -l-_ PollFeedback
Rating --_ PollFeedback
MaxRating --_ PollFeedback
Reviewer -u-_ PollFeedback
PF_Poll -u-_ PollFeedback
QuestionFeedback "0,_"-u-_"1,_" PollFeedback

@enduml

## ER-модель

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

Poll "0,_"--_"0,_" User
Organization "0,_"--_"1,_" User
PollFeedback "0,_"--_"1" User

Poll "0,_"--_"1" Organization

BlackListedUser "1"--"0,_" User
BlackListedUser "1"--"0,_" Organization

WhiteListedUser "1"--"0,_" User
WhiteListedUser "1"--"0,_" Organization

Question "1"--_"1,_" Poll

Answer "1,_"--_"1" PollResult

QuestionFeedback "0,_"--_"1,\*" PollFeedback

@enduml

## Реляційна схема

![eer](https://user-images.githubusercontent.com/31734600/145624893-81f1abe5-f15b-46d0-9325-3e609cf31dc1.png)
