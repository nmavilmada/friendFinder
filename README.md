# friendFinder

This is a compatability-based "FriendFinder Application that can be utilized as a dating app. 
The basic concept behind this app is that it will take in results from the users' survey, then compare their answers with those from other users. The score is the deciding factor to determine the best match. Once the best overall match is selected, the app will diplay the relevant name and picture.

# Technologies Used
1. Heroku 
2. Express handle routing 
3. Path

# How it works
1. An HTML page will display ten questions - each answer fall into a rating scale from 1 to 5 based on how much the user agrees or disaagrees with the question. 
    a. 1 - Strongly Disagree
    b. 5 - Stronly Agree
    
2. When a user select an answer the rating associated with that answer will be pushed to an array.

3. Once all 10 questions have been answered, all a total score will be calculated.

4. Your score will be compared with the other user scores in the database.

5. The app will calculate the absolute score difference between you and each user in the database.

6. The closet match will have the least amount of difference. 

7. Once the closet match is determiened, a name and a picture of that individual will be displayed.
