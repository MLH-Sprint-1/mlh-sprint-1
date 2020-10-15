'''
input: question
process: find relevant documents which may contain answer. For this we will pick
        the first link from web search
bonus: return top 5 links
output: return scraped passage from the selected web page
'''



class document_extract:

    def __init__(self, question):
        self.question=question
    
    def get_link(self, n_links):
        '''
            get top n links from google search for the question asked
        '''

        count=0
        try:
            from googlesearch import search
        except ImportError:
            print("Pip install googlesearch module first")
        
        for link in search(query=self.question, tld='co.in', lang='en', num=n_links, stop=n_links, pause=2):
            count+=1
            print(count)
            print('link :' + ' '+ link)


    def scrape_data(self):
        
        link=self.get_link(n_links=1)
        try:
            import wikipedia

            print('Relevant keywords regarding your question are: ', wikipedia.search(self.question,results=4))
            print('In less than 10 sentence, Collable thinks the answer is: ', wikipedia.summary((self.question), sentences=10))
            page = wikipedia.page(self.question)

            return f"For complete information"(page.content


        except ImportError:
            print('Something is not imported correctly')


        