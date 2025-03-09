// Function to get URL parameters
function getUrlParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split('&');
    
    for (const pair of pairs) {
        const [key, value] = pair.split('=');
        if (key && value) {
            params[decodeURIComponent(key)] = decodeURIComponent(value);
        }
    }
    
    return params;
}

// Function to create animated particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 8}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Product data (normally, this data would come from a database)
const products = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 14.99,
        image: "https://whitmorerarebooks.cdn.bibliopolis.com/pictures/1542.jpg?auto=webp&v=1452577731",
        description: "Harper Lee's Pulitzer Prize-winning masterpiece, 'To Kill a Mockingbird', is a profound exploration of racial injustice and moral growth in the American South during the 1930s. Through the eyes of young Scout Finch, we witness her father, Atticus Finch, a lawyer who defends a Black man falsely accused of raping a white woman. The novel delves into themes of prejudice, compassion, and the loss of innocence, painting a vivid portrait of a society grappling with deep-seated racism and inequality. Lee's storytelling is both tender and unflinching, creating characters that have become iconic in American literature.",
        details: {
            "Publication Date": "July 11, 1960",
            "Publisher": "J.B. Lippincott & Co.",
            "Pages": "281",
            "Language": "English",
            "ISBN": "978-0061120084",
            "Genre": "Southern Gothic, Bildungsroman"
        }
    },
    {
        id: 2,
        title: "Dune",
        author: "Frank Herbert",
        price: 18.99,
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1649161732i/32773948._SY540_.jpg",
        description: "Frank Herbert's 'Dune' is a monumental science fiction epic set in a distant future where noble houses control planetary fiefs. The story centers on young Paul Atreides, whose family accepts the stewardship of Arrakis, the desert planet that is the only source of the most valuable substance in the universe—the spice melange. As political intrigue and betrayal unfold, Paul finds himself at the center of a prophecy among the planet's native Fremen. Herbert masterfully weaves themes of politics, religion, ecology, and human evolution into a complex narrative that has influenced science fiction for generations. The novel's rich world-building and philosophical depth make it a cornerstone of the genre.",
        details: {
            "Publication Date": "August 1965",
            "Publisher": "Chilton Books",
            "Pages": "412",
            "Language": "English",
            "ISBN": "978-0441172719",
            "Genre": "Science Fiction, Space Opera"
        }
    },
    {
        id: 3,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        price: 12.99,
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546071216l/5907.jpg",
        description: "J.R.R. Tolkien's 'The Hobbit' is a beloved fantasy adventure that follows Bilbo Baggins, a comfort-loving hobbit who is reluctantly swept into an epic quest by the wizard Gandalf and a company of thirteen dwarves. Their journey takes them through treacherous lands filled with trolls, goblins, and other dangers as they seek to reclaim the dwarves' homeland and treasure from the fearsome dragon Smaug. Along the way, Bilbo discovers courage he never knew he possessed and acquires a mysterious ring that will change the fate of Middle-earth. Written with charm and wit, 'The Hobbit' serves as a perfect introduction to Tolkien's more complex masterpiece, 'The Lord of the Rings', while standing as a timeless classic in its own right.",
        details: {
            "Publication Date": "September 21, 1937",
            "Publisher": "George Allen & Unwin",
            "Pages": "310",
            "Language": "English",
            "ISBN": "978-0618260300",
            "Genre": "Fantasy, Children's Literature"
        }
    },
    {
        id: 4,
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        price: 16.99,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1622820586i/34594249.jpg",
        description: "Stieg Larsson's 'The Girl with the Dragon Tattoo' is a gripping thriller that introduces readers to Lisbeth Salander, a brilliant but troubled hacker, and Mikael Blomkvist, a disgraced financial journalist. When Blomkvist is hired by wealthy industrialist Henrik Vanger to solve the 40-year-old disappearance of his niece, he reluctantly teams up with Salander. Together, they uncover a dark web of family secrets, financial corruption, and serial murder. Set against the backdrop of Sweden's stark landscape, the novel combines elements of murder mystery, family saga, and financial intrigue. Larsson's unflinching portrayal of violence against women and his creation of one of literature's most memorable protagonists in Lisbeth Salander have made this first installment of the Millennium series an international phenomenon.",
        details: {
            "Publication Date": "August 2005",
            "Publisher": "Norstedts Förlag",
            "Pages": "465",
            "Language": "Swedish (Original), English (Translation)",
            "ISBN": "978-0307454546",
            "Genre": "Crime Fiction, Thriller"
        }
    },
    {
        id: 5,
        title: "The Shining",
        author: "Stephen King",
        price: 15.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCYVMBXDOXKabnDY38Q2nl2ABd6PCn8CR6Kg&s",
        description: "Stephen King's 'The Shining' is a masterpiece of psychological horror that follows Jack Torrance, a recovering alcoholic and aspiring writer who accepts a position as the winter caretaker of the isolated Overlook Hotel in Colorado. Accompanied by his wife Wendy and son Danny, who possesses psychic abilities known as 'the shining,' Jack hopes the solitude will help him reconnect with his family and overcome his writer's block. As winter storms cut them off from civilization, the hotel's dark history and supernatural forces begin to influence Jack's sanity, putting his family in grave danger. King expertly builds tension through atmospheric description and deep character development, creating a haunting exploration of addiction, family dynamics, and the supernatural that has become a cornerstone of horror literature.",
        details: {
            "Publication Date": "January 28, 1977",
            "Publisher": "Doubleday",
            "Pages": "447",
            "Language": "English",
            "ISBN": "978-0385121675",
            "Genre": "Horror, Supernatural Fiction"
        }
    },
    {
        id: 6,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 10.99,
        image: "https://m.media-amazon.com/images/I/81Scutrtj4L._UF1000,1000_QL80_.jpg",
        description: "Jane Austen's 'Pride and Prejudice' is a timeless romantic novel that follows the emotional development of Elizabeth Bennet, who learns the error of making hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness. Set in rural England in the early 19th century, the narrative centers on the Bennet family, particularly the five unmarried daughters whose parents are eager to see them wed to wealthy, respectable men. When the proud and wealthy Mr. Darcy enters their social circle, Elizabeth's prejudice against his apparent arrogance and her family's financial constraints create a series of misunderstandings that delay their eventual union. Austen's wit, sharp social commentary, and masterful character development have made this novel a beloved classic that continues to resonate with readers over two centuries after its publication.",
        details: {
            "Publication Date": "January 28, 1813",
            "Publisher": "T. Egerton, Whitehall",
            "Pages": "279",
            "Language": "English",
            "ISBN": "978-0141439518",
            "Genre": "Classic Literature, Romance"
        }
    },
    {
        id: 7,
        title: "The Book Thief",
        author: "Markus Zusak",
        price: 13.99,
        image: "https://m.media-amazon.com/images/I/914cHl9v7oL._AC_UF1000,1000_QL80_.jpg",
        description: "Markus Zusak's 'The Book Thief' is a profound and moving novel set in Nazi Germany, narrated by Death itself. The story follows Liesel Meminger, a young girl living with foster parents in a small town outside Munich during World War II. As Liesel adjusts to her new home, she finds solace in stealing books and learning to read with the help of her foster father. Around her, the horrors of the Nazi regime unfold, including the hiding of a Jewish man in their basement. Through Liesel's eyes, readers witness both the cruelty of war and the power of words and human connection to provide hope in the darkest of times. Zusak's lyrical prose and unique narrative perspective create an unforgettable meditation on death, life, and the transformative power of literature.",
        details: {
            "Publication Date": "2005",
            "Publisher": "Picador",
            "Pages": "552",
            "Language": "English",
            "ISBN": "978-0375831003",
            "Genre": "Historical Fiction, Young Adult"
        }
    },
    {
        id: 8,
        title: "One Hundred Years of Solitude",
        author: "Gabriel García Márquez",
        price: 17.99,
        image: "https://m.media-amazon.com/images/I/71WQQjgEhQL.jpg",
        description: "Gabriel García Márquez's masterpiece 'One Hundred Years of Solitude' chronicles the multi-generational story of the Buendía family in the fictional town of Macondo. Through the family's founding, flourishing, and eventual decline, Márquez weaves a rich tapestry of Latin American history, blending the mundane with the miraculous in his distinctive magical realist style. The novel explores themes of time, fate, solitude, and the repetitive nature of history as the Buendía family members find themselves trapped in patterns they seem unable to escape. Filled with unforgettable characters and extraordinary events—from flying carpets to plagues of insomnia and forgetfulness—the novel creates a mythical yet recognizable world that has captivated readers worldwide. This landmark work of Latin American literature challenges conventional narrative structures while offering profound insights into the human condition.",
        details: {
            "Publication Date": "1967",
            "Publisher": "Editorial Sudamericana",
            "Pages": "417",
            "Language": "Spanish (Original), English (Translation)",
            "ISBN": "978-0060883287",
            "Genre": "Magical Realism, Literary Fiction"
        }
    },
    {
        id: 9,
        title: "1984",
        author: "George Orwell",
        price: 11.99,
        image: "https://cdn.kobo.com/book-images/55abfdd4-7e21-4496-a70c-19bca8892bb3/1200/1200/False/NCQNg-qQAT-Z7_F0SBWzjw.jpg",
        description: "George Orwell's '1984' is a dystopian masterpiece that depicts a totalitarian society where the government, led by the enigmatic Big Brother, maintains absolute control through constant surveillance, propaganda, and the manipulation of language and history. The story follows Winston Smith, a low-ranking member of the ruling Party who secretly rebels by keeping a diary of his forbidden thoughts. When he falls in love with Julia, another Party member, their relationship becomes an act of rebellion against the state. As Winston seeks connection with a rumored resistance movement, he faces the brutal reality of a world where independent thought is the ultimate crime. Orwell's chilling vision of a future where truth is malleable and freedom is obliterated continues to resonate as a warning about the dangers of totalitarianism, censorship, and the erosion of civil liberties.",
        details: {
            "Publication Date": "June 8, 1949",
            "Publisher": "Secker & Warburg",
            "Pages": "328",
            "Language": "English",
            "ISBN": "978-0451524935",
            "Genre": "Dystopian Fiction, Political Fiction"
        }
    },
    {
        id: 10,
        title: "Treasure Island",
        author: "Robert Louis Stevenson",
        price: 9.99,
        image: "https://cdn2.penguin.com.au/covers/400/9780241733790.jpg",
        description: "Robert Louis Stevenson's 'Treasure Island' is the quintessential adventure novel that has defined the pirate genre for generations. The story follows young Jim Hawkins who discovers a treasure map among the possessions of a deceased guest at his parents' inn. This discovery launches him into a perilous voyage to a remote island, accompanied by the one-legged ship's cook Long John Silver and a crew of rough sailors. As the expedition progresses, Jim finds himself caught in a web of mutiny, betrayal, and the search for buried gold. Through Jim's coming-of-age journey, Stevenson crafts a thrilling tale of bravery and moral complexity. With its unforgettable characters—particularly the charming yet dangerous Silver—and vivid depictions of seafaring life, 'Treasure Island' remains a beloved classic that continues to captivate readers of all ages.",
        details: {
            "Publication Date": "1883",
            "Publisher": "Cassell & Company",
            "Pages": "292",
            "Language": "English",
            "ISBN": "978-0141321004",
            "Genre": "Adventure Fiction, Children's Literature"
        }
    },
    {
        id: 11,
        title: "The Diary of a Young Girl",
        author: "Anne Frank",
        price: 12.99,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1560816565i/48855.jpg",
        description: "Anne Frank's 'The Diary of a Young Girl' is a profoundly moving and authentic account of a Jewish teenager hiding from Nazi persecution during World War II. From 1942 to 1944, Anne and her family lived in a secret annex in Amsterdam, where she recorded her thoughts, feelings, and observations in her diary, which she named 'Kitty.' With remarkable insight and honesty, Anne documents the challenges of living in confined quarters with seven other people, the fear of discovery, and the normal adolescent struggles with identity and relationships. Despite the circumstances, her writing reveals an extraordinary spirit, intelligence, and hope for the future. Tragically, the family was discovered and sent to concentration camps, where Anne died at age 15. Her father, Otto Frank, the only survivor, published her diary posthumously. This intimate testimony of the Holocaust has become one of the world's most widely read books, offering a deeply personal perspective on one of history's darkest periods.",
        details: {
            "Publication Date": "1947",
            "Publisher": "Contact Publishing",
            "Pages": "283",
            "Language": "Dutch (Original), English (Translation)",
            "ISBN": "978-0553577129",
            "Genre": "Autobiography, Holocaust Literature"
        }
    },
    {
        id: 12,
        title: "Atomic Habits",
        author: "James Clear",
        price: 19.99,
        image: "https://target.scene7.com/is/image/Target/GUEST_0035cc74-7206-485d-aa04-83b3b7cf8db7?wid=800&hei=800&qlt=80&fmt=webp",
        description: "James Clear's 'Atomic Habits' presents a practical framework for improving everyday life through the cultivation of better habits. Drawing on scientific research and real-world examples, Clear explains how tiny changes in behavior can lead to remarkable results over time. The book introduces the concept of 'atomic habits'—small, consistent actions that compound into significant outcomes—and outlines four laws of behavior change: make it obvious, make it attractive, make it easy, and make it satisfying. Clear demonstrates how these laws can be applied to break bad habits and establish good ones, emphasizing the importance of identity-based habits where change is driven by who you wish to become rather than what you want to achieve. With actionable strategies and engaging storytelling, 'Atomic Habits' offers a proven system for personal transformation that has resonated with millions of readers seeking to make positive changes in their lives.",
        details: {
            "Publication Date": "October 16, 2018",
            "Publisher": "Avery",
            "Pages": "320",
            "Language": "English",
            "ISBN": "978-0735211292",
            "Genre": "Self-help, Personal Development"
        }
    },
    {
        id: 13,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        price: 20.99,
        image: "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF894,1000_QL80_.jpg",
        description: "Yuval Noah Harari's 'Sapiens: A Brief History of Humankind' offers a bold, interdisciplinary narrative of humanity's creation and evolution. Beginning with the emergence of Homo sapiens in Africa 70,000 years ago, Harari traces how our species came to dominate the planet through what he identifies as three revolutions: the Cognitive Revolution, which enabled cooperation among large numbers of humans through shared myths and stories; the Agricultural Revolution, which tied people to the land and led to the development of complex societies; and the Scientific Revolution, which unleashed unprecedented human power to reshape the world. Throughout this sweeping history, Harari challenges many conventional beliefs, questioning whether progress has led to greater human happiness and examining how our biological past continues to influence our present behavior. With provocative insights into everything from religion to capitalism to artificial intelligence, 'Sapiens' encourages readers to reconsider what it means to be human in the context of our entire evolutionary history.",
        details: {
            "Publication Date": "2011 (Hebrew), 2014 (English)",
            "Publisher": "Harper",
            "Pages": "443",
            "Language": "Hebrew (Original), English (Translation)",
            "ISBN": "978-0062316097",
            "Genre": "History, Anthropology"
        }
    },
    {
        id: 14,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        price: 18.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWKiMog3eF2GocsQG6hgBKQIXW19FGvuCmw&s",
        description: "Stephen Hawking's 'A Brief History of Time' is a landmark work that attempts to explain a range of subjects in cosmology, including the Big Bang, black holes, light cones, and string theory, to the non-specialist reader. First published in 1988, the book uses minimal technical jargon, focusing instead on the underlying concepts that shape our understanding of the universe. Hawking guides readers through the evolution of scientific thought from Aristotle to Newton to Einstein, explaining how our perception of time and space has changed throughout history. He explores fundamental questions about the nature of the universe: Is it infinite or finite? Will it continue expanding forever or eventually collapse? Is time travel possible? Despite dealing with complex theoretical physics, Hawking's clear explanations and wit make these concepts accessible to general audiences. The book not only popularized modern cosmology but also demonstrated how science can address profound philosophical questions about our existence and the universe.",
        details: {
            "Publication Date": "1988",
            "Publisher": "Bantam Books",
            "Pages": "212",
            "Language": "English",
            "ISBN": "978-0553380163",
            "Genre": "Science, Cosmology"
        }
    },
    {
        id: 15,
        title: "Meditations",
        author: "Marcus Aurelius",
        price: 14.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTteBgP50LLVx7AJ9Uv90e6IZ_X5TB6cCdECw&s",
        description: "Marcus Aurelius's 'Meditations' is a series of personal writings by the Roman Emperor and Stoic philosopher, composed during his military campaigns between 170 and 180 CE. Never intended for publication, these philosophical reflections represent the emperor's private notes to himself on how to live virtuously and cope with the challenges of leadership and mortality. Organized into 12 books, the work explores Stoic principles such as accepting what is beyond one's control, treating others with justice and understanding, and viewing obstacles as opportunities for growth. Aurelius emphasizes the importance of rationality, self-discipline, and maintaining perspective on transient pleasures and pains. Despite being written nearly two millennia ago, the 'Meditations' continues to resonate with modern readers seeking wisdom on resilience, ethical living, and finding tranquility amid life's uncertainties. Its enduring appeal lies in its practical approach to philosophy and the intimate glimpse it provides into the mind of a ruler striving to live according to his principles.",
        details: {
            "Publication Date": "c. 180 CE",
            "Publisher": "Various (first printed edition in 1558)",
            "Pages": "Varies by edition",
            "Language": "Greek (Original), English (Translation)",
            "ISBN": "978-0812968255",
            "Genre": "Philosophy, Stoicism"
        }
    },
    {
        id: 16,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        price: 15.99,
        image: "https://m.media-amazon.com/images/I/81N9xAIkohL.jpg",
        description: "Robert Kiyosaki's 'Rich Dad Poor Dad' is a personal finance book that challenges conventional wisdom about money and investing. Through the contrasting perspectives of his highly educated but financially struggling biological father (the 'poor dad') and his friend's entrepreneurial father (the 'rich dad'), Kiyosaki presents lessons about building wealth and financial independence. The book emphasizes the importance of financial education, understanding the difference between assets and liabilities, and developing an investor mindset rather than remaining dependent on salaried employment. Kiyosaki argues that traditional education prepares people to be employees rather than business owners or investors, and that true financial freedom comes from generating passive income through investments like real estate and businesses. Since its publication in 1997, the book has become a foundational text in personal finance literature, praised for its accessible approach to complex financial concepts while also drawing criticism for some of its specific investment advice.",
        details: {
            "Publication Date": "April 1, 1997",
            "Publisher": "Warner Books",
            "Pages": "207",
            "Language": "English",
            "ISBN": "978-1612680194",
            "Genre": "Personal Finance, Self-help"
        }
    },
    {
        id: 17,
        title: "The Art of War",
        author: "Sun Tzu",
        price: 10.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6U323KzK6It-C5NVp3Bzse2DugcKPzpRLXA&s",
        description: "Sun Tzu's 'The Art of War' is an ancient Chinese military treatise dating from the 5th century BCE. Attributed to the military strategist Sun Tzu, the text is composed of 13 chapters, each devoted to a different aspect of warfare. The work emphasizes the importance of positioning, strategic advantage, psychology, and knowing when to engage in conflict and when to avoid it. Sun Tzu advocates for winning without fighting whenever possible and stresses that the highest form of generalship is to subdue the enemy without battle. The principles outlined in the text—such as thorough preparation, understanding the terrain, adapting to changing circumstances, and exploiting an opponent's weaknesses—have transcended their military origins to influence fields as diverse as business, sports, diplomacy, and personal development. Despite its age, 'The Art of War' remains relevant for its insights into strategy, competition, and conflict resolution, making it one of the most influential texts on strategic thinking ever written.",
        details: {
            "Publication Date": "5th century BCE",
            "Publisher": "Various",
            "Pages": "Varies by edition",
            "Language": "Chinese (Original), English (Translation)",
            "ISBN": "978-0143037521",
            "Genre": "Military Strategy, Philosophy"
        }
    },
    {
        id: 18,
        title: "In Cold Blood",
        author: "Truman Capote",
        price: 17.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8KhnCEduAo2ob1wy9kWpncJYjOV1z81ECg&s",
        description: "Truman Capote's 'In Cold Blood' is a pioneering work of literary non-fiction that reconstructs the 1959 murder of the Clutter family in rural Kansas and the investigation, capture, trial, and execution of the killers, Richard Hickock and Perry Smith. Published in 1966 after six years of research and interviews, the book combines journalistic rigor with novelistic techniques—detailed character development, atmospheric scene-setting, and psychological insight—to create what Capote called a 'non-fiction novel.' The narrative explores the complex personalities of the murderers, the impact of the crime on the community, and the nature of American violence. Capote's immersive approach, which included developing a close relationship with the killers while they awaited execution, raised ethical questions about the relationship between journalists and their subjects. Despite these controversies, 'In Cold Blood' revolutionized crime writing and remains a masterpiece of narrative journalism that continues to influence how true stories are told.",
        details: {
            "Publication Date": "1966",
            "Publisher": "Random House",
            "Pages": "343",
            "Language": "English",
            "ISBN": "978-0679745587",
            "Genre": "True Crime, Literary Non-fiction"
        }
    },
    {
        id: 19,
        title: "The 4-Hour Body",
        author: "Tim Ferriss",
        price: 21.99,
        image: "https://m.media-amazon.com/images/I/61PvTGTRS2L.jpg",
        description: "Tim Ferriss's 'The 4-Hour Body' is an unconventional guide to rapid physical transformation based on the author's self-experimentation and interviews with experts across various fields. Subtitled 'An Uncommon Guide to Rapid Fat-Loss, Incredible Sex, and Becoming Superhuman,' the book presents a collection of minimalist approaches to health, fitness, and physical performance. Ferriss introduces the concept of the 'minimum effective dose'—the smallest input needed for the desired outcome—and applies it to weight loss, muscle gain, sleep improvement, sexual performance, and athletic ability. The book includes detailed protocols like the 'Slow-Carb Diet,' which promises significant fat loss with one 'cheat day' per week, and strength training routines designed to maximize results with minimal gym time. While some of Ferriss's methods challenge conventional wisdom and have drawn criticism from medical professionals, the book has developed a cult following for its data-driven approach to body optimization and its emphasis on finding shortcuts to physical improvement.",
        details: {
            "Publication Date": "December 14, 2010",
            "Publisher": "Crown Publishing Group",
            "Pages": "592",
            "Language": "English",
            "ISBN": "978-0307463630",
            "Genre": "Health, Fitness"
        }
    },
    {
        id: 20,
        title: "Man's Search for Meaning",
        author: "Viktor E. Frankl",
        price: 13.99,
        image: "https://m.media-amazon.com/images/I/819Pl1nP0ZL.jpg",
        description: "Viktor E. Frankl's 'Man's Search for Meaning' is a powerful memoir and psychological treatise born from the author's experiences as a prisoner in Nazi concentration camps during World War II. The book, first published in 1946, is divided into two parts. In the first section, Frankl recounts the brutal conditions of the camps and observes how prisoners who maintained a sense of purpose and meaning in their lives were more likely to survive the ordeal. The second part introduces logotherapy, Frankl's psychotherapeutic method based on the premise that the primary motivational force in humans is the search for meaning. Unlike other forms of psychotherapy that focus on pleasure or power, logotherapy centers on helping patients find personal meaning in life, even—and especially—in the face of suffering. With profound insights into human resilience and spiritual survival, the book argues that while we cannot avoid suffering, we can choose how to cope with it and find meaning in it. This perspective has made 'Man's Search for Meaning' an enduring source of inspiration for readers seeking to understand the deeper purpose of their lives.",
        details: {
            "Publication Date": "1946",
            "Publisher": "Verlag für Jugend und Volk",
            "Pages": "165",
            "Language": "German (Original), English (Translation)",
            "ISBN": "978-0807014271",
            "Genre": "Psychology, Memoir"
        }
    }
];

// Function to display product details
function displayProductDetails() {
    const params = getUrlParams();
    const productId = parseInt(params.id);
    
    // Find the corresponding product
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        document.getElementById('product-detail').innerHTML = '<p>Product not found.</p>';
        return;
    }
    
    // Build HTML for product details
    const detailsHTML = Object.entries(product.details).map(([key, value]) => {
        return `<li><span class="detail-label">${key}:</span> <span class="detail-value">${value}</span></li>`;
    }).join('');
    
    // Fill content with product details
    document.getElementById('product-detail').innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="product-info">
            <h2 class="product-title">${product.title}</h2>
            <p class="product-author">By ${product.author}</p>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="quantity-selector">
                <button class="quantity-btn" onclick="decrementQuantity()">-</button>
                <span id="quantity" class="quantity-value">1</span>
                <button class="quantity-btn" onclick="incrementQuantity()">+</button>
            </div>
            <div class="product-description">
                ${product.description}
            </div>
            <div class="product-actions">
                <button class="btn btn-primary" onclick="addToCart(${product.id}, '${product.title}', ${product.price})">Add to Cart</button>
                <button class="btn btn-secondary"><a href="product.html" class="back-link">← Back to Books</a></button>
            </div>
            <div class="product-details-section">
                <h3 class="details-title">Book Details</h3>
                <ul class="details-list">
                    ${detailsHTML}
                </ul>
            </div>
        </div>
    `;
}

// Function to add to cart
function addToCart(id, title, price) {
    // Get current cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === id);
    
    const quantity = parseInt(document.getElementById('quantity').textContent) || 1;
    
    if (existingItem) {
        // If product already exists, increase quantity
        existingItem.quantity += quantity;
    } else {
        // Otherwise, add new product
        cart.push({
            id: id,
            title: title,
            price: price,
            quantity: quantity
        });
    }
    
    // Save updated cart
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Display confirmation message
    alert(`"${title}" has been added to your cart.`);
}

// Functions for quantity selector
function incrementQuantity() {
    const quantityElement = document.getElementById('quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
}

function decrementQuantity() {
    const quantityElement = document.getElementById('quantity');
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantityElement.textContent = quantity - 1;
    }
}

// Initialize particles and display product details
window.onload = function() {
    createParticles();
    displayProductDetails();
};