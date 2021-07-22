# create a function to find median of two sorted lists
def findMedianSortedArrays(nums1, nums2):
    # sort the two lists
    nums1.sort()
    nums2.sort()
    # return the median of the two lists
    return (nums1[(len(nums1) - 1) // 2] + nums2[(len(nums2) - 1) // 2]) / 2

# logistic regression
# input: X, y, alpha, max_iter
# output: theta
def logistic_regression(X, y, alpha, max_iter):
    # initialize theta
    theta = np.zeros(X.shape[1])
    # initialize theta
    for i in range(max_iter):
        # update theta
        theta = theta - alpha * (1 / len(X)) * np.dot(X.T, (np.dot(X, theta) - y))
    return theta

# linear regression
# input: X, y, alpha, max_iter
# output: theta
def linear_regression(X, y, alpha, max_iter):
    # initialize theta
    theta = np.zeros(X.shape[1])
    # initialize theta
    for i in range(max_iter):
        # update theta
        theta = theta - alpha * (1 / len(X)) * np.dot(X.T, (np.dot(X, theta) - y))
    return theta

# linear regression with regularization
# input: X, y, alpha, max_iter, lambda
# output: theta
def linear_regression_with_regularization(X, y, alpha, max_iter, lambda_):
    # initialize theta
    theta = np.zeros(X.shape[1])
    # initialize theta
    for i in range(max_iter):
        # update theta
        theta = theta - alpha * (1 / len(X)) * np.dot(X.T, (np.dot(X, theta) - y)) + lambda_ * theta
    return theta

# pandas data frame
# input: file_path
# output: data frame
def read_data(file_path):
    # read the data
    data = pd.read_csv(file_path)
    # return the data frame
    return data

# plot the data
# input: data frame
# output: None
def plot_data(data):
    # plot the data
    data.plot(x='Population', y='Profit', style='o')
    # show the plot
    plt.show()

# find duplicates
# input: data frame
# output: list of duplicated rows
def find_duplicates(data):
    # find duplicates
    duplicates = data[data.duplicated()]
    # return the list of duplicated rows
    return duplicates

# find outliers
# input: data frame
# output: list of outliers
def find_outliers(data):
    # find outliers
    outliers = data[(data['Profit'] > 150) | (data['Profit'] < -50)]
    # return the list of outliers
    return outliers

# find the medians of the columns
# input: data frame
# output: list of medians
def find_medians(data):
    # find the medians of the columns
    medians = data.median()
    # return the list of medians
    return medians

# find the mean of the columns
# input: data frame
# output: list of means
def find_means(data):
    # find the means of the columns
    means = data.mean()
    # return the list of means
    return means

# normalize the data
# input: data frame
# output: normalized data frame
def normalize_data(data):
    # normalize the data
    normalized_data = (data - data.mean()) / data.std()
    # return the normalized data frame
    return normalized_data

# hypothesis function
# input: X, theta
# output: hypothesis
def hypothesis(X, theta):
    # return the hypothesis
    return np.dot(X, theta)

# z calculate the cost function
# input: X, y, theta
# output: cost function
def cost_function(X, y, theta):
    # return the cost function
    return np.sum(np.dot(X, theta) - y) ** 2 / (2 * len(X))

# decision tree regression
# input: X, y, max_depth
# output: theta
def decision_tree_regression(X, y, max_depth):
    # initialize theta
    theta = np.zeros(X.shape[1])
    # initialize theta
    for i in range(max_depth):
        # update theta
        theta = theta - alpha * (1 / len(X)) * np.dot(X.T, (np.dot(X, theta) - y))
    return theta

# ANN
# input: X, y, alpha, max_iter, hidden_layer_size
# output: theta
def ann(X, y, alpha, max_iter, hidden_layer_size):
    # initialize theta
    theta = np.zeros((X.shape[1], hidden_layer_size + 1))
    # initialize theta
    for i in range(max_iter):
        # update theta
        theta = theta - alpha * (1 / len(X)) * np.dot(X.T, (np.dot(X, theta) - y))
    return theta

# Read list of dictionaries
# input: file_path
# output: list of dictionaries
def read_dict(file_path):
    # read the data
    data = pd.read_csv(file_path)
    # initialize the list of dictionaries
    dict_list = []
    # iterate over the rows of the data frame
    for index, row in data.iterrows():
        # create a dictionary
        dict_ = {}
        # iterate over the columns of the data frame
        for column in data.columns:
            # if the column is not the first column
            if column != data.columns[0]:
                # add the column to the dictionary
                dict_[column] = row[column]
        # add the dictionary to the list of dictionaries
        dict_list.append(dict_)
    # return the list of dictionaries
    return dict_list

# Number of solutions to test modular equations
# input: number of solutions to test
# output: number of solutions to test
def num_solutions_to_test(number_of_solutions):
    # return the number of solutions to test
    return number_of_solutions
}

# Number of solutions to modular equations
# input: number of solutions to test
# output: number of solutions to test
def num_solutions_to_test(number_of_solutions):
    # return the number of solutions to test
    return number_of_solutions
}


# draw scatterplot
# input: x, y, x_label, y_label, title
# output: None
def draw_scatterplot(x, y, x_label, y_label, title):
    # create a figure
    fig = plt.figure()
    # add a subplot
    ax = fig.add_subplot(111)
    # set transparency
    ax.patch.set_alpha(0.5)
    # plot the data
    ax.scatter(x, y, alpha=0.5, color='blue')
    # label the title
    ax.set_title(title)
    # label the x axis
    ax.set_xlabel(x_label)
    # label the y axis
    ax.set_ylabel(y_label)
    # show the figure
    plt.show()
}