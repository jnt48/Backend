import fetch from "node-fetch";

const testCCode = async () => {
  const cCode = `
  #include <stdio.h>

  int main() {
      // Declare an array of integers (size 5 in this case)
      int arr[5] = {10, 20, 30, 40, 50};  // Example values
      int size = 5;  // Size of the array
      int sum = 0;   // Variable to store the sum

      // Loop through the array to calculate the sum
      for (int i = 0; i < size; i++) {
          sum += arr[i];  // Add the current array element to sum
      }

      // Print the sum
      printf("The sum of the array elements is: %d\\n", sum);

      return 0;
  }
  `;

  try {
    const response = await fetch("https://backend-4hjd.onrender.com/run", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: cCode }),
    });

    const result = await response.json();
    console.log("Output:", result.output);
  } catch (error) {
    console.error("Error:", error);
  }
};

testCCode();
