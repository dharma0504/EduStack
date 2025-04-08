import React from 'react';
import "./STYLES/Guidesinfo.css"

const questionsData = [
    {
        platform: "LeetCode",
        questions: [
            { name: "Two Sum", description: "Given an array of integers, return indices of the two numbers such that they add up to a specific target.", link: "https://leetcode.com/problems/two-sum/" },
            { name: "Reverse Integer", description: "Given a 32-bit signed integer, reverse digits of an integer.", link: "https://leetcode.com/problems/reverse-integer/" },
            { name: "Palindrome Number", description: "Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.", link: "https://leetcode.com/problems/palindrome-number/" },
            { name: "Roman to Integer", description: "Convert a roman numeral to an integer.", link: "https://leetcode.com/problems/roman-to-integer/" },
            { name: "Longest Common Prefix", description: "Find the longest common prefix string amongst an array of strings.", link: "https://leetcode.com/problems/longest-common-prefix/" },
            { name: "Valid Parentheses", description: "Determine if the input string is valid (i.e., balanced parentheses).", link: "https://leetcode.com/problems/valid-parentheses/" },
            { name: "Merge Two Sorted Lists", description: "Merge two sorted linked lists and return it as a new sorted list.", link: "https://leetcode.com/problems/merge-two-sorted-lists/" },
            { name: "Remove Duplicates from Sorted Array", description: "Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
            { name: "Container With Most Water", description: "Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.", link: "https://leetcode.com/problems/container-with-most-water/" },
            { name: "3Sum", description: "Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.", link: "https://leetcode.com/problems/3sum/" },
            { name: "Merge k Sorted Lists", description: "Merge k sorted linked lists and return it as one sorted list.", link: "https://leetcode.com/problems/merge-k-sorted-lists/" },
            { name: "Search in Rotated Sorted Array", description: "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2]. Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
            { name: "Unique Paths", description: "A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below). The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below). How many possible unique paths are there?", link: "https://leetcode.com/problems/unique-paths/" },
            { name: "Maximum Subarray", description: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.", link: "https://leetcode.com/problems/maximum-subarray/" },
            { name: "Climbing Stairs", description: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?", link: "https://leetcode.com/problems/climbing-stairs/" },
            { name: "Word Search", description: "Given an m x n board and a word, find if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where 'adjacent' cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.", link: "https://leetcode.com/problems/word-search/" },
            { name: "Best Time to Buy and Sell Stock", description: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
            { name: "Combination Sum", description: "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order. The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.", link: "https://leetcode.com/problems/combination-sum/" },
            { name: "Valid Sudoku", description: "Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules: Each row must contain the digits 1-9 without repetition. Each column must contain the digits 1-9 without repetition. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.", link: "https://leetcode.com/problems/valid-sudoku/" },
        ]
    },
    {
        platform: "HackerRank",
        questions: [
            { name: "Arrays: Left Rotation", description: "Perform left rotations on an array.", link: "https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem" },
            { name: "Two Strings", description: "Determine if two strings share a common substring.", link: "https://www.hackerrank.com/challenges/two-strings/problem" },
            { name: "Simple Array Sum", description: "Find the sum of elements in an array.", link: "https://www.hackerrank.com/challenges/simple-array-sum/problem" },
            { name: "Compare the Triplets", description: "Compare the scores of two players.", link: "https://www.hackerrank.com/challenges/compare-the-triplets/problem" },
            { name: "Diagonal Difference", description: "Find the absolute difference between the sums of matrix diagonals.", link: "https://www.hackerrank.com/challenges/diagonal-difference/problem" },
            { name: "Plus Minus", description: "Print the ratio of positive, negative, and zero elements in an array.", link: "https://www.hackerrank.com/challenges/plus-minus/problem" },
            { name: "Staircase", description: "Print a staircase of '#' symbols.", link: "https://www.hackerrank.com/challenges/staircase/problem" },
            { name: "Mini-Max Sum", description: "Find the minimum and maximum sums of four out of five integers.", link: "https://www.hackerrank.com/challenges/mini-max-sum/problem" },
            { name: "Birthday Cake Candles", description: "Count the number of tallest candles on a birthday cake.", link: "https://www.hackerrank.com/challenges/birthday-cake-candles/problem" },
            { name: "Time Conversion", description: "Convert 12-hour AM/PM time format to 24-hour format.", link: "https://www.hackerrank.com/challenges/time-conversion/problem" },
            // Add more HackerRank questions here
            { name: "Grading Students", description: "Round grades according to specified rules.", link: "https://www.hackerrank.com/challenges/grading/problem" },
            { name: "Apple and Orange", description: "Count apples and oranges fallen on the house based on given distances.", link: "https://www.hackerrank.com/challenges/apple-and-orange/problem" },
            { name: "Kangaroo", description: "Determine if two kangaroos will ever land at the same location after making the same number of jumps.", link: "https://www.hackerrank.com/challenges/kangaroo/problem" },
            { name: "Between Two Sets", description: "Count numbers that are factors of all elements in the first array and factors of all elements in the second array.", link: "https://www.hackerrank.com/challenges/between-two-sets/problem" },
            { name: "Breaking the Records", description: "Count the number of times a record-breaking high or low score is achieved.", link: "https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem" },
            { name: "The Birthday Bar", description: "Count the number of contiguous segments of a chocolate bar that sum to a given number.", link: "https://www.hackerrank.com/challenges/the-birthday-bar/problem" },
            { name: "Divisible Sum Pairs", description: "Count the pairs of integers in an array that sum up to a divisible number.", link: "https://www.hackerrank.com/challenges/divisible-sum-pairs/problem" },
            { name: "Migratory Birds", description: "Find the most common type of bird among a group of birds.", link: "https://www.hackerrank.com/challenges/migratory-birds/problem" },
            { name: "Day of the Programmer", description: "Calculate the date of the 256th day of the year in the specified calendar year.", link: "https://www.hackerrank.com/challenges/day-of-the-programmer/problem" },
            { name: "Bon Appétit", description: "Calculate the amount one person owes for a shared meal after excluding one item.", link: "https://www.hackerrank.com/challenges/bon-appetit/problem" },
        ]
    },
    {
        platform: "CodeChef",
        questions: [
            { name: "Small Factorials", description: "Compute the factorial of a given number.", link: "https://www.codechef.com/problems/FCTRL2" },
            { name: "Life, the Universe, and Everything", description: "Print numbers until given input.", link: "https://www.codechef.com/problems/TEST" },
            { name: "Chef and Fruits", description: "Chef loves fruits and wants to exchange some with his friend. Determine the minimum number of fruits Chef needs to exchange to make the number of each type equal to the number of other types.", link: "https://www.codechef.com/problems/FRUITS" },
            { name: "Chef and Mean", description: "Given an array of integers, determine whether it's possible to choose two integers from the array such that their mean is equal to the mean of the remaining elements.", link: "https://www.codechef.com/problems/CHEFMEAN" },
            { name: "Chef and Subtree MEXs", description: "You are given a tree with N nodes, where each node has an integer assigned to it. Determine the maximum possible MEX (minimum excluded value) of a subtree for each node in the tree.", link: "https://www.codechef.com/problems/CHEFSUBA" },
            { name: "Chef and Rainbow Array Revisited", description: "This problem is an extension of the 'Chef and Rainbow Array' problem. Here, you're required to find the length of the longest rainbow subsequence in the given array.", link: "https://www.codechef.com/problems/RAINBOWB" },
            { name: "Chef and Numbers", description: "Given an array of integers, Chef wants to select a subset of elements such that the bitwise AND of all selected elements is zero. Determine the maximum size of such a subset.", link: "https://www.codechef.com/problems/AND" },
            { name: "Chef and Easy Queries (Part 2)", description: "This problem is an extension of the 'Chef and Easy Queries' problem. Here, you need to optimize the solution to handle a large number of queries efficiently.", link: "https://www.codechef.com/problems/CEQUAL" },
            { name: "Chef and Number Game", description: "Chef and his friend are playing a game with a number. They take turns to perform operations on the number. Determine the winner of the game.", link: "https://www.codechef.com/problems/NUMGAME" },
            { name: "Chef and Price Control", description: "The problem involves controlling the prices of products in a market. You're given the original and modified prices, and you need to calculate the difference in revenue.", link: "https://www.codechef.com/problems/PRICECON" },
            { name: "Chef and Icecream", description: "In this problem, Chef sells ice creams of different types, and customers pay using 5 or 10 rupee notes. Determine whether Chef will be able to provide change for all customers without any deficit.", link: "https://www.codechef.com/problems/CHFICRM" },
            { name: "Chef and Digits", description: "Given a number, rearrange its digits to form the largest and smallest numbers possible.", link: "https://www.codechef.com/problems/LONGSEQ" },
            { name: "Chef and Permutations", description: "Given an array of integers, determine whether it forms a permutation or not.", link: "https://www.codechef.com/problems/CHEFPNT" },
            { name: "Chef and Prime Numbers", description: "Given a number, determine whether it's prime or not.", link: "https://www.codechef.com/problems/PRB01" },
            { name: "Chef and Strings", description: "Find the number of occurrences of a particular substring in a given string.", link: "https://www.codechef.com/problems/RECNDSTR" },
            { name: "Chef and Spades", description: "Determine the winner of a card game based on a specific rule.", link: "https://www.codechef.com/problems/CRDGAME" },
            { name: "Chef and Profits", description: "Given an array of integers representing profits for each day, find the maximum profit by buying and selling stocks.", link: "https://www.codechef.com/problems/CIELRCPT" },
            { name: "Chef and Kth Divisor", description: "Given a number, find its Kth divisor.", link: "https://www.codechef.com/problems/KFIB" },
            { name: "Chef and Subarray", description: "Given an array of integers, find the number of subarrays such that the maximum element is less than K.", link: "https://www.codechef.com/problems/SUBINC" },
            // Add more CodeChef questions here
        ]
    },
    {
        platform: "GeeksforGeeks",
        questions: [
            { name: "Find the Missing Number", description: "Find the missing number in an array of integers from 1 to n.", link: "https://practice.geeksforgeeks.org/problems/missing-number-in-array1416/1" },
            { name: "Reverse a String", description: "Reverse a given string.", link: "https://practice.geeksforgeeks.org/problems/reverse-a-string/1" },
            { name: "Find the Duplicate Number", description: "Given an array of integers containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number exists.", link: "https://practice.geeksforgeeks.org/problems/find-duplicates-in-an-array/1" },
            { name: "Leaders in an array", description: "Given an array of integers, find the leaders in the array. An element is a leader if it's greater than all the elements to its right side.", link: "https://practice.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1" },
            { name: "Subarray with given sum", description: "Given an unsorted array of integers and a sum, find if there exists a subarray with the given sum.", link: "https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1" },
            { name: "Reverse words in a given string", description: "Given a string, reverse the words in the string.", link: "https://practice.geeksforgeeks.org/problems/reverse-words-in-a-given-string5459/1" },
            { name: "Implement strstr", description: "Given two strings, find the index of the first occurrence of the second string in the first string (also known as substring search).", link: "https://practice.geeksforgeeks.org/problems/implement-strstr/1" },
            { name: "Rotate Array", description: "Given an array, rotate the array to the right by k steps, where k is non-negative.", link: "https://practice.geeksforgeeks.org/problems/rotate-array-by-n-elements-1587115621/1" },
            { name: "Max circular subarray sum", description: "Given an array, find the maximum sum of a subarray such that the subarray may be wrapped around at the end (circular subarray).", link: "https://practice.geeksforgeeks.org/problems/max-circular-subarray-sum-1587115620/1" },
            { name: "Count pairs with given sum", description: "Given an array of integers and a sum, find the count of pairs with the given sum.", link: "https://practice.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1" },
            { name: "Minimum Platforms", description: "Given arrival and departure times of trains, find the minimum number of platforms required to handle the train traffic.", link: "https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1" },
            { name: "First negative integer in every window of size k", description: "Given an array and a positive integer k, find the first negative integer for each window of size k.", link: "https://practice.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1" },
            { name: "Convert array into Zig-Zag fashion", description: "Given an array of integers, rearrange the array elements such that arr[0] <= arr[1] >= arr[2] <= arr[3] >= ...", link: "https://practice.geeksforgeeks.org/problems/convert-array-into-zig-zag-fashion1638/1" },
            { name: "Next Permutation", description: "Given an array, find the lexicographically next greater permutation of the array elements.", link: "https://practice.geeksforgeeks.org/problems/next-permutation5226/1" },
            { name: "Trapping Rain Water", description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.", link: "https://practice.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1" },
            { name: "Minimum number of jumps", description: "Given an array of integers where each element represents the max number of steps that can be made forward from that element, return the minimum number of jumps to reach the end of the array.", link: "https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1" },
            { name: "Minimum swaps and K together", description: "Given an array of integers and a number k, find the minimum number of swaps required to bring all elements less than or equal to k together.", link: "https://practice.geeksforgeeks.org/problems/minimum-swaps-required-to-bring-all-elements-less-than-or-equal-to-k-together/0" },
            { name: "Count all possible paths from top left to bottom right", description: "Given a 2D grid, count the number of ways to reach the bottom-right corner from the top-left corner.", link: "https://practice.geeksforgeeks.org/problems/count-all-possible-paths-from-top-left-to-bottom-right3011/1" },
            { name: "Number of pairs", description: "Given two arrays X and Y of positive integers, find the number of pairs such that xy > yx (where x is an element from X and y is an element from Y).", link: "https://practice.geeksforgeeks.org/problems/number-of-pairs-1587115620/1" },
            { name: "Merge Without Extra Space", description: "Given two sorted arrays, merge them into a single sorted array without using extra space.", link: "https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1" },
        ]
    }
];

function TopCodingQuestions() {
    return (
        <div className="unique-container">
            <h1 className="unique-heading">Coding practice Questions</h1>
            {questionsData.map(platformData => (
                <div key={platformData.platform}>
                    <h2 className="unique-heading">{platformData.platform}</h2>
                    <ul className="unique-ul">
                        {platformData.questions.map(question => (
                            <li key={question.name} className="unique-li-resource">
                                <h3 className="unique-resource-h2">{question.name}</h3>
                                <p className="unique-resource-p">{question.description}</p>
                                <a href={question.link} className="unique-resource-a" target="_blank" rel="noopener noreferrer">Link to problem</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default TopCodingQuestions;
