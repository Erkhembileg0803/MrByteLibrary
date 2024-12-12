  
   document.addEventListener('DOMContentLoaded', () => {
     const dropdowns = document.querySelectorAll('.dropdown');
   
     if (dropdowns.length === 0) {
       console.warn('No dropdown elements found.');
     }
   
     dropdowns.forEach(dropdown => {
       dropdown.addEventListener('click', () => {
         const dropdownContent = dropdown.querySelector('.dropdown-content');
         if (!dropdownContent) {
           console.warn('No dropdown-content found for this dropdown.');
           return;
         }
   
       
         dropdownContent.style.display =
           dropdownContent.style.display === 'block' ? 'none' : 'block';
   
        
         dropdown.classList.toggle('active');
       });
     });
   });
   
   

   document.getElementById('searchBar').addEventListener('input', function () {
    const searchQuery = this.value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (!searchQuery.trim()) {
        return; 
    }

    const filesToSearch = [
        '/Mrbytelibrary/Education/Languages/Language book pdf/hsk1.html',
        '/Mrbytelibrary/Education/Languages/Language book pdf/ielts16.html',
        '/Mrbytelibrary/Education/Languages/Language book pdf/russian11.html',
        '/Mrbytelibrary/Education/Math/math books pdf/allthemath.html',
        '/Mrbytelibrary/Education/Math/math books pdf/basicmath.html',
        '/Mrbytelibrary/Education/Math/math books pdf/calculus.html',
        '/Mrbytelibrary/Education/Math/math books pdf/mat1angi.html',
        '/Mrbytelibrary/Education/Math/math books pdf/mat2angi.html',
        '/Mrbytelibrary/Education/Math/math books pdf/mat10angi.html',
        '/Mrbytelibrary/Education/Math/math books pdf/mat11angi.html',
        '/Mrbytelibrary/Education/Math/math books pdf/mat12angi.html',
        '/Mrbytelibrary/Education/Math/math books pdf/Sat2022.html',
        '/Mrbytelibrary/Education/Science/Science book pdf/abriefhistoryoftime.html',
        '/Mrbytelibrary/Education/Science/Science book pdf/fizika11.html',
        '/Mrbytelibrary/Education/Science/Science book pdf/git.html',
        '/Mrbytelibrary/Education/Science/Science book pdf/theselfishgene.html',
        '/Mrbytelibrary/Education/Science/Science book pdf/cookbook.html',
        '/Mrbytelibrary/Education/Science/Science book pdf/effectivecpp.html',
        '/Mrbytelibrary/Education/Science/Science book pdf/thepragmaticprogrammer.html',
        '/Mrbytelibrary/Education/Science/Science book pdf/wikiedition.html',
        '/Mrbytelibrary/Education/Science/Science book pdf/youdontknowjs.html',
        '/Mrbytelibrary/Fiction/Fantasy/Fantasy book pdf/harrypotter.html',
        '/Mrbytelibrary/Fiction/Fantasy/Fantasy book pdf/lord.html',
        '/Mrbytelibrary/Fiction/Horror/Horror book pdf/it.html',
        '/Mrbytelibrary/Fiction/Horror/Horror book pdf/shining.html',
        '/Mrbytelibrary/Fiction/Romance/Romance book pdf/happy.html',
        '/Mrbytelibrary/Fiction/Romance/Romance book pdf/red.html',
        '/Mrbytelibrary/Selfhelp/Finance/Finance book pdf/4hour.html',
        '/Mrbytelibrary/Selfhelp/Finance/Finance book pdf/100mleads.html',
        '/Mrbytelibrary/Selfhelp/Finance/Finance book pdf/100moffers.html',
        '/Mrbytelibrary/Selfhelp/Finance/Finance book pdf/dotcom.html',
        '/Mrbytelibrary/Selfhelp/Finance/Finance book pdf/economics.html',
        '/Mrbytelibrary/Selfhelp/Finance/Finance book pdf/expert.html',
        '/Mrbytelibrary/Selfhelp/Finance/Finance book pdf/howtogetrich.html',
        '/Mrbytelibrary/Selfhelp/Finance/Finance book pdf/iwillteachyou.html',
        '/Mrbytelibrary/Selfhelp/Finance/Finance book pdf/psychologymoney.html',
        '/Mrbytelibrary/Selfhelp/Finance/Finance book pdf/psychologyselling.html',
        '/Mrbytelibrary/Selfhelp/Finance/Finance book pdf/thinkgrow.html',
        '/Mrbytelibrary/Selfhelp/Finance/Finance book pdf/traction.html',
        '/Mrbytelibrary/Selfhelp/Finance/Finance book pdf/traffic.html',
        '/Mrbytelibrary/Selfhelp/Philosophy/Philosophy books pdf/egoistheenemy.html',
        '/Mrbytelibrary/Selfhelp/Philosophy/Philosophy books pdf/letters.html',
        '/Mrbytelibrary/Selfhelp/Philosophy/Philosophy books pdf/meditations.html',
        '/Mrbytelibrary/Selfhelp/Productivity/Productivity book pdf/12rules.html',
        '/Mrbytelibrary/Selfhelp/Productivity/Productivity book pdf/artofseduction.html',
        '/Mrbytelibrary/Selfhelp/Productivity/Productivity book pdf/atomichabits.html',
        '/Mrbytelibrary/Selfhelp/Productivity/Productivity book pdf/canthurtme.html',
        '/Mrbytelibrary/Selfhelp/Productivity/Productivity book pdf/cheese.html',
        '/Mrbytelibrary/Selfhelp/Productivity/Productivity book pdf/deepwork.html',
        '/Mrbytelibrary/Selfhelp/Productivity/Productivity book pdf/diewithzero.html',
        '/Mrbytelibrary/Selfhelp/Productivity/Productivity book pdf/elonmusk.html',
        '/Mrbytelibrary/Selfhelp/Productivity/Productivity book pdf/goodtogreat.html',
        '/Mrbytelibrary/Selfhelp/Productivity/Productivity book pdf/howtoknowaperson.html',
        '/Mrbytelibrary/Selfhelp/Productivity/Productivity book pdf/makeitstick.html',
        '/Mrbytelibrary/Selfhelp/Productivity/Productivity book pdf/manssearchformeaning.html',
        '/Mrbytelibrary/Selfhelp/Productivity/Productivity book pdf/mindset.html',
        '/Mrbytelibrary/Selfhelp/Productivity/Productivity book pdf/models.html',
        '/Mrbytelibrary/Selfhelp/Productivity/Productivity book pdf/outlive.html',
        '/Mrbytelibrary/Selfhelp/Productivity/Productivity book pdf/powerofnow.html',
        '/Mrbytelibrary/Selfhelp/Productivity/Productivity book pdf/sogood.html',
        '/Mrbytelibrary/Selfhelp/Productivity/Productivity book pdf/thealchemist.html',
        '/Mrbytelibrary/Selfhelp/Productivity/Productivity book pdf/thefouragreements.html',
        '/Mrbytelibrary/Selfhelp/Productivity/Productivity book pdf/thethirddoor.html',
        '/Mrbytelibrary/Selfhelp/Productivity/Productivity book pdf/theway.html',
        '/Mrbytelibrary/Selfhelp/Productivity/Productivity book pdf/ultralearning.html'
    ];

    filesToSearch.forEach(file => {
        fetch(file)
            .then(response => response.text())
            .then(data => {
               
                const headings = data.match(/<h[1].*?>(.*?)<\/h[1]>/g);

                
                const matchedHeadings = (headings || []).filter(heading => heading.toLowerCase().includes(searchQuery));

                if (matchedHeadings.length > 0) {
                    const result = document.createElement('div');
                    result.classList.add('search-result');

                    
                    const resultLink = document.createElement('a');
                    resultLink.href = file;
                    resultLink.classList.add('search-link');

                  
                    matchedHeadings.forEach(content => {
                        const cleanContent = content.replace(/<.*?>/g, ''); 
                        resultLink.innerHTML += `<p class="search-content">${cleanContent}</p>`;
                    });

                   
                    resultsContainer.appendChild(resultLink);
                }
            })
            .catch(error => console.error('Error fetching file:', error));
    });
});


  const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });
  
