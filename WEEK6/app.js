const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Takealot",
    location: "Cape Town",
    salary: 45000,
    type: "Full-time",
    description: "Build and maintain customer-facing React applications.",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Investec",
    location: "Johannesburg",
    salary: 62000,
    type: "Full-time",
    description:
      "Design and scale RESTful APIs handling millions of daily transactions.",
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Discovery",
    location: "Johannesburg",
    salary: 38000,
    type: "Contract",
    description: "Lead user research and design systems for our health app.",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "Vodacom",
    location: "Midrand",
    salary: 70000,
    type: "Full-time",
    description: "Manage CI/CD pipelines and cloud infrastructure on AWS.",
  },
  {
    id: 5,
    title: "Data Analyst",
    company: "Standard Bank",
    location: "Cape Town",
    salary: 41000,
    type: "Part-time",
    description:
      "Analyse customer behaviour data and produce executive reports.",
  },
];


//1. Render jobs

const jobcontainer = document.querySelector(".job-container");

function renderJobs(jobList)
{
    jobcontainer.innerHTML = "";

    jobList.map((job) =>
    {
        const card = document.createElement("div");
        card.classList.add("job-card");
        card.setAttribute("data-id", job.id);

        card.innerHTML = `
            <h2>${job.title}</h2>
            <p>${job.company} - ${job.location}</p>
            <p>R${job.salary} / month</p>
            <div class="job-details hidden">
                <p>Type: ${job.type}</p>
                <p>About the role: ${job.description}</p>
            <div>
            `;

        card.addEventListener("click", () =>
        {
            const details = card.querySelector(".job-details");
            details.classList.toggle("hidden");
            card.classList.toggle("expanded");
        });
        jobcontainer.appendChild(card);
    });

}

renderJobs(jobs);

//EVENTS
// addEventListeder

// const heading = document.querySelector("h1");
// heading.addEventListener("click", function(event) 
// {
//     console.log("heading was clicked");
//     console,log(event);

// });

const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("input", function (event)
{
    const searchTerm = event.target.value.toLowerCase().trim();

    const filteredJobs = jobs.filter( (job) =>
    {
        const titleMatch = job.title.toLowerCase().includes(searchTerm);

        if(titleMatch === true)
        {
            return true;
        }
        else 
        {
            return false;
        }
    });

    renderJobs(filteredJobs);
});

//form event
const jobForm = document.querySelector("#job-form");
const titleInput = document.querySelector("#job-title");
const companyInput = document.querySelector("#company");
const locationInput = document.querySelector("#location");
const salaryInput = document.querySelector("#salary");

jobForm.addEventListener("submit", (event) =>
{
    event.preventDefault();

    const title = titleInput.value.trim();
    const company = companyInput.value.trim();
    const location = locationInput.value.trim();
    const salary = Number(salaryInput.value.trim());

    console.log(title, company, location, salary);

});

//Expand the job card

//category filter

const categoryFilter = document.querySelector("#category-filter");
categoryFilter.addEventListener("change", (event) =>
{
    const selectedCategory = event.target.value;
    const categorisedJobs = jobs.filter((job) => 
    {
        if(selectedCategory === "all")
        {
            return job;
        }
        else
        {
            return job.type === selectedCategory;
        }
    });

    renderJobs(categorisedJobs);
});
