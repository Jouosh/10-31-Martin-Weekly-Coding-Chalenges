import java.util.Scanner;

public class atbash {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String in = scanner.nextLine();
        System.out.println(toAtbash(in));
    }

    public static String toAtbash(String in) {

        StringBuilder result = new StringBuilder();

        for (int i = 0; i < in.length(); i++) {
            char temp = in.charAt(i);
            if (Character.isAlphabetic(temp) && Character.isLowerCase(temp)) {
                int diff = temp - 'a';
                temp = (char) ('z' - diff);
            } else if (Character.isAlphabetic(temp) && Character.isUpperCase(temp)) {
                int diff = temp - 'A';
                temp = (char) ('Z' - diff);
            }
            
            result.append(temp);
        }
        return result.toString();
    }
}
