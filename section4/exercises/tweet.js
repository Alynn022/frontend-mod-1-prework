/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  addComment(comment) {
    this.comments.push(comment);
  }
  incrementNumberOfLikes() {
    this.numberOfLikes++
  }
};

var tweet1 = new Tweet ('Lynn', 'Bath and Body has the best candles', '3:53 am', '32', ['definitely', 'agree to disagree',]);
console.log(tweet1);

tweet1.addComment(['I love bath and body!']);
console.log(tweet1);

tweet1.incrementNumberOfLikes();
console.log(tweet1);

var tweet2 = new Tweet ('Jimmy', 'Collecting Pokemon Cards', '2:30 pm', '102', ['Where do you get them?', 'Any good pulls?', 'Whats your TikTok?',]);
console.log(tweet2);

tweet2.addComment(['Want to trade?']);
console.log(tweet2);
