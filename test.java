 class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

// create a function to print hello world
class HelloWorld {

// create a function to find a element in an array
public static int findElement(int[] array, int element) {
    for (int i = 0; i < array.length; i++) {
        if (array[i] == element) {
            return i;
        }
    }
    return -1;
}

// create a function to find a element in array using  merge sort
public static int findElementUsingMergeSort(int[] array, int element) {
    int[] temp = new int[array.length];
    int i = 0;
    int j = array.length - 1;
    int k = 0;
    while (i <= j) {
        if (array[i] < element) {
            temp[k++] = array[i++];
        } else if (array[j] > element) {
            temp[k++] = array[j--];
        } else {
            return i;
        }
    }
    for (i = 0; i < temp.length; i++) {
        array[i] = temp[i];
    }
    return -1;
}

// create a function to find a element in array o(log n) complexity
public static int findElementUsingLogN(int[] array, int element) {
    int low = 0;
    int high = array.length - 1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (array[mid] == element) {
            return mid;
        } else if (array[mid] < element) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

// create a function to sort elements in array using merge sort
public static void sortElementsUsingMergeSort(int[] array) {
    int[] temp = new int[array.length];
    int i = 0;
    int j = array.length - 1;
    int k = 0;
    while (i <= j) {
        if (array[i] < array[j]) {
            temp[k++] = array[i++];
        } else if (array[i] > array[j]) {
            temp[k++] = array[j--];
        } else {
            i++;
            j--;
        }
    }
    for (i = 0; i < temp.length; i++) {
        array[i] = temp[i];
    }
}


// create a function to add two linked lists
public static ListNode addLists(ListNode l1, ListNode l2) {
    int carry = 0;
    ListNode result = new ListNode();
    ListNode temp = new ListNode();
    while (l1 != null || l2 != null) {
        int sum = carry;
        if (l1 != null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 != null) {
            sum += l2.val;
            l2 = l2.next;
        }
        temp.val = sum % 10;
        carry = sum / 10;
        temp.next = result.next;
        result.next = temp;
        result = temp;
    }
    if (carry > 0) {
        temp.val = carry;
        temp.next = null;
        result = temp;
    }
    return result;
}

// make a request to the github api to fetch the details of the user using the username
public static String getUserDetails(String username) {
    String url = "https://api.github.com/users/" + username;
    try {
        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();
        con.setRequestMethod("GET");
        con.setRequestProperty("User-Agent", "Mozilla/5.0");
        int responseCode = con.getResponseCode();
        if (responseCode == 200) {
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }

            in.close();
            return response.toString();
        } else {
            return "";
        }
    } catch (IOException e) {
        return "";
    }
}

// request  github api to fetch the user using the username
public static String getUser(String username) {
    String url = "https://api.github.com/users/" + username;
    try {
        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();
        con.setRequestMethod("GET");
        con.setRequestProperty("User-Agent", "Mozilla/5.0");
        int responseCode = con.getResponseCode();
        if (responseCode == 200) {
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            } 
            in.close();
            return response.toString();
        } else {
            return "";
        }
    } 
    catch (IOException e) {
        return "";
    }
}

// design a vending machine
public static String designVendingMachine(String[] items, int[] prices, int money) {
    String result = "";
    for (int i = 0; i < items.length; i++) {
        if (prices[i] <= money) {
            result += items[i] + " ";
            money -= prices[i];
        }
    }
    return result;
}

// find the third element in the tail linked list
public static int findThirdElement(ListNode head) {
    ListNode temp = head;
    ListNode second = head;
    ListNode first = head;
    int count = 0;
    while (temp != null) {
        count++;
        if (count == 2) {
            second = temp;
        }
        if (count == 3) {
            first = temp;
        }
        temp = temp.next;
    }
    return second.val;
}


public static void main(String[] args) {
    int[] array = {11, 2, 31, 4, 25, 6, 17, 8, 99, 10};
    int element = 11;
    // int result = findElementUsingMergeSort(array, element);
    // System.out.println(result);
    // result = findElementUsingLogN(array, element);
    // System.out.println(result);
    // result = findElement(array, element);
    // System.out.println(result);
    sortElementsUsingMergeSort(array);
    // ListNode l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    // ListNode l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    // ListNode result1 = addLists(l1, l2);
    // while (result1 != null) {
    //     System.out.print(result1.val + " ");
    //     result1 = result1.next;
    // }

    System.out.println("Hello World!");
}
}

