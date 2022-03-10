import java.util.Scanner;
public class Product {
    public static void main(String[]args) {
        Scanner input = new Scanner(System.in);
        
        int product = -1;
        int userInput = 0;
        
        do {
            System.out.println("Enter a number to multiply then enter -1 to end program");
            userInput = input.nextInt();
            product = product * userInput;
        }
        while(userInput != -1); {
                System.out.println("Your entered number is equals to " + product);
            }
    }
}
