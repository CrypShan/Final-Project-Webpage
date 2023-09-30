document.addEventListener('DOMContentLoaded', function () {
    const services = document.querySelectorAll('.service');
    const serviceTitle = document.getElementById('service-title');
    const serviceDescription = document.getElementById('service-description');

    services.forEach(function (service) {
        service.addEventListener('click', function () {
            const serviceId = this.getAttribute('id');

          
            switch (serviceId) {
                case 'lawn-maintenance':
                    serviceTitle.textContent = 'Lawn Maintenance';
                    serviceDescription.textContent = 'Our expert team ensures your lawn is always pristine.';
                
                    // Create a container for the task list
                    const lawnTaskList = document.createElement('ul');
                    lawnTaskList.classList.add('lawn-care-list');
                
                    // Add tasks to the list
                    const lawnTasks = [
                        'Mowing the lawn',
                        'Trimming the edges',
                        'Fertilizing as needed',
                        'Weeding the garden',
                        'Watering the plants'
                    ];
                
                    lawnTasks.forEach((task) => {
                        const listItem = document.createElement('li');
                        listItem.textContent = task;
                        lawnTaskList.appendChild(listItem);
                    });
                
                    // Append the task list to the service description
                    serviceDescription.appendChild(lawnTaskList);
                
                    break;
            
                case 'garden-design':
                    serviceTitle.textContent = 'Garden Design';
                    serviceDescription.textContent = 'Transform your outdoor space with our expert garden design services.';
                
                    // Create a container for the task list
                    const gardenTaskList = document.createElement('ul');
                    gardenTaskList.classList.add('garden-design-list');
                
                    // Add tasks to the list
                    const gardenTasks = [
                        'Consultation and site analysis',
                        'Concept and layout planning',
                        'Plant selection and placement',
                        'Hardscape design (e.g., pathways, patios)',
                        'Maintenance and care guidelines'
                    ];
                
                    gardenTasks.forEach((task) => {
                        const listItem = document.createElement('li');
                        listItem.textContent = task;
                        gardenTaskList.appendChild(listItem);
                    });
                
                    // Append the task list to the service description
                    serviceDescription.appendChild(gardenTaskList);
                
                    break;
            
                case 'tree-care':
                    serviceTitle.textContent = 'Tree Care';
                    serviceDescription.textContent = 'We provide comprehensive tree care services to keep your trees healthy.';
                  
                    // Create a container for the task list specific to Tree Care
                    const treeCareTaskList = document.createElement('ul');
                    treeCareTaskList.classList.add('tree-care-list');
                  
                    // Add tasks specific to Tree Care
                    const treeCareTasks = [
                        'Tree trimming and pruning',
                        'Disease diagnosis and treatment',
                        'Tree removal and stump grinding',
                        'Planting new trees',
                        'Tree health assessments'
                    ];
                  
                    treeCareTasks.forEach((task) => {
                        const listItem = document.createElement('li');
                        listItem.textContent = task;
                        treeCareTaskList.appendChild(listItem);
                    });
                  
                    // Append the task list to the service description
                    serviceDescription.appendChild(treeCareTaskList);
                  
                    break;
            
                default:
                    // Handle default case
                    break;
            }
            document.addEventListener("DOMContentLoaded", function () {
                const man = document.querySelector(".man");
            
               
                man.style.animationPlayState = "running";
            });
        });
    });
});