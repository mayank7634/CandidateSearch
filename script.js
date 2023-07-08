document.addEventListener('DOMContentLoaded', function() {
    var searchForm = document.getElementById('searchForm');
    var candidateList = document.getElementById('candidates');
    var fetchedCandidates = [];
  
    if (searchForm) {
      searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Perform search functionality
        var location = document.getElementById('location').value;
        var jobRole = document.getElementById('jobRole').value;
  
        // Simulate fetched candidates (replace with actual AJAX call)
        fetchedCandidates = [
          { name: 'Mayank Tiwari', location: 'New York', jobRole: 'Software Engineer' },
          { name: 'vikash kumar', location: 'India', jobRole: 'Designer' },
          { name: 'Umesh Kumar', location: 'London', jobRole: 'Data Analyst' },
          { name: 'Ravi', location: 'London', jobRole: 'Web devloper' },
          { name: 'vaibhav jha', location: 'London', jobRole: 'Data Entry' },
        ];
  
        // Filter candidates based on search criteria
        var filteredCandidates = fetchedCandidates.filter(function(candidate) {
          return candidate.location.toLowerCase() === location.toLowerCase() &&
            candidate.jobRole.toLowerCase() === jobRole.toLowerCase();
        });
  
        // Display the filtered candidates
        displayCandidates(filteredCandidates);
      });
    }
  
    // Function to display candidates in the candidate list section
    function displayCandidates(candidates) {
      candidateList.innerHTML = "";
  
      if (candidates.length === 0) {
        var li = document.createElement('li');
        li.textContent = 'No candidates found.';
        candidateList.appendChild(li);
      } else {
        candidates.forEach(function(candidate) {
          var li = document.createElement('li');
          li.textContent = candidate.name + ' - ' + candidate.location + ' - ' + candidate.jobRole;
          candidateList.appendChild(li);
        });
      }
    }
  });
  