struct Token {
    amount: u64,
    token: String,
}

fn main() {
    let token = Token {
        amount: 10,
        token: "MyToken".to_string(),
    };

    println!("Token: amount = {}, token = {}", token.amount, token.token);

    let (sender_token, receiver_token) = transfer("John", 10, "MyToken");

    println!("Sender Token: amount = {}, token = {}", sender_token.amount, sender_token.token);
    println!("Receiver Token: amount = {}, token = {}", receiver_token.amount, receiver_token.token);
}

fn transfer(receiver: &str, amount: u64, token: &str) -> (Token, Token) {
    let sender_token = Token {
        amount: amount,
        token: token.to_string(),
    };

    let receiver_token = Token {
        amount: amount,
        token: token.to_string(),
    };

    (sender_token, receiver_token)
}