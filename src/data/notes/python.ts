import type { NoteChapter } from '../types'

export const pythonNotes: NoteChapter[] = [
  {
    id: 'py-comprehensions',
    title: 'Chapter 1: List and Dictionary Comprehensions',
    content: 'Python provides a concise syntax for creating lists and dictionaries based on existing iterables. They are more readable and run faster than standard appends inside loops.',
    codeSnippet: {
      code: `# Standard loop approach
squares = []
for x in range(10):
    squares.append(x**2)

# List Comprehension approach
squares_comp = [x**2 for x in range(10)]

# Conditional comprehension
even_squares = [x**2 for x in range(10) if x % 2 == 0]

# Dictionary Comprehension
square_dict = {x: x**2 for x in range(5)} # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}`,
      language: 'python',
    },
    summary: 'Comprehensions combine filtering (if) and mapping (expression) into a single line of python code.',
  },
  {
    id: 'py-args',
    title: 'Chapter 2: Dynamic Arguments - *args and **kwargs',
    content: 'In Python, functions can accept arbitrary numbers of arguments using *args (positional arguments as a tuple) and **kwargs (keyword arguments as a dictionary).',
    codeSnippet: {
      code: `def print_details(*args, **kwargs):
    print("Positional args tuple:", args)
    print("Keyword args dict:", kwargs)

# Call function
print_details("Apple", "Banana", color="yellow", stock=45)
# Outputs:
# Positional args tuple: ('Apple', 'Banana')
# Keyword args dict: {'color': 'yellow', 'stock': 45}`,
      language: 'python',
    },
    summary: '*args allows passing dynamic arguments without naming them, and **kwargs allows passing named configuration flags dynamically.',
  },
]
