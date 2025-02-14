public class MagicPotionIdentifier {

    // Function to determine if the power level is a perfect cube
    public static String isMagicalPotion(int power) {
        // Find the cube root of the given power level
        int cubeRoot = (int) Math.round(Math.pow(power, 1.0 / 3.0));

        // Check if the cube of the calculated cube root equals the given power level
        if (Math.pow(cubeRoot, 3) == power) {
            return "YES";
        } else {
            return "NO";
        }
    }

    public static void main(String[] args) {
        // Test cases
        System.out.println(isMagicalPotion(27));  // Output: YES
        System.out.println(isMagicalPotion(30));  // Output: NO
        System.out.println(isMagicalPotion(1));   // Output: YES
        System.
