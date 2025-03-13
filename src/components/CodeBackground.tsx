import React, { useMemo } from 'react';

const CODE_SNIPPETS = [
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

interface SnippetPosition {
  top: string;
  left: string;
  snippet: string;
}

const useSnippetPositions = (snippets: string[]): SnippetPosition[] => {
  return useMemo(() => {
    const totalSnippets = snippets.length;
    const cols = Math.ceil(Math.sqrt(totalSnippets));
    const rows = Math.ceil(totalSnippets / cols);
    
    return snippets.map((snippet, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;
      
      const baseTop = (row * 100 / rows);
      const baseLeft = (col * 100 / cols);
      
      const offsetTop = Math.random() * 10 + 5;
      const offsetLeft = Math.random() * 10 + 5;
      
      return {
        top: `${baseTop + offsetTop}%`,
        left: `${baseLeft + offsetLeft}%`,
        snippet
      };
    });
  }, [snippets]);
};

const CodeBackground: React.FC = () => {
  const snippetPositions = useSnippetPositions(CODE_SNIPPETS);
  
  return (
    <div className="code-background absolute inset-0 z-0 overflow-hidden opacity-20 pointer-events-none">
      {snippetPositions.map((position, index) => (
        <pre 
          key={index} 
          className="code-snippet text-sm absolute text-gray-800 font-mono"
          style={{ 
            top: position.top, 
            left: position.left,
            maxWidth: '30%',
            transform: 'rotate(' + (Math.random() * 10 - 5) + 'deg)'
          }}
        >
          <code className="language-c">
            {position.snippet}
          </code>
        </pre>
      ))}
    </div>
  );
};

export default CodeBackground;
