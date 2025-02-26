import React from 'react';

const CodeBackground: React.FC = () => {
  const codeSnippets = [
    `#include "ft_printf.h"
int main() {
    ft_printf("Hello, World!\\n");
    return (0);
}`,
    `void ft_sort_int_tab(int arr[], int n) {
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
    `typedef struct s_btree {
	struct s_btree	*left;
	struct s_btree	*right;
	void			*item;
}	t_btree;
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
 
  const totalSnippets = codeSnippets.length;
  const cols = Math.ceil(Math.sqrt(totalSnippets));
  const rows = Math.ceil(totalSnippets / cols);
  
  return (
    <div className="code-background absolute inset-0 z-0 overflow-hidden opacity-10 pointer-events-none">
      {codeSnippets.map((snippet, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        
        const baseTop = (row * 100 / rows);
        const baseLeft = (col * 100 / cols);
        
        const offsetTop = Math.random() * 10 + 5;
        const offsetLeft = Math.random() * 10 + 5;
        
        const top = `${baseTop + offsetTop}%`;
        const left = `${baseLeft + offsetLeft}%`;
        
        return (
          <pre 
            key={index} 
            className="code-snippet text-sm absolute"
            style={{ top, left }}
          >
            <code className="language-c">
              {snippet}
            </code>
          </pre>
        );
      })}
    </div>
  );
};

export default CodeBackground;
