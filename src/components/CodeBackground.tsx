import React from 'react';

const CodeBackground: React.FC = () => {
  const codeSnippets = [
    `#include <stdio.h>
int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
    `void bubbleSort(int arr[], int n) {
    int i, j, temp;
    for (i = 0; i < n-1; i++) {
        for (j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}`,
    `struct Node {
    int data;
    struct Node* next;
};`,
    `int pipefd[2];
    pipe(pipefd);
    if (fork() == 0) {
        close(pipefd[1]);
        char buffer[100];
        read(pipefd[0], buffer, 100);
        printf("Child read: %s", buffer);
        close(pipefd[0]);
    } else {
        close(pipefd[0]);
        write(pipefd[1], "Hello from parent", 17);
        close(pipefd[1]);
    }`
  ];
 
  return (
    <div className="code-background absolute inset-0 z-0 overflow-hidden opacity-10 pointer-events-none">
      {codeSnippets.map((snippet, index) => (
        <pre key={index} className={`code-snippet text-sm absolute ${getRandomPosition()}`}>
          <code className="language-c">
            {snippet}
          </code>
        </pre>
      ))}
    </div>
  );
};

// Helper function to generate random positions
const getRandomPosition = () => {
  const positions = [
    'top-10 left-1/4',
    'bottom-20 right-10',
    'top-1/3 right-1/4',
    'bottom-1/4 left-10',
    'top-1/2 left-1/3',
  ];
  return positions[Math.floor(Math.random() * positions.length)];
};

export default CodeBackground;
