//your JS code here. If required.
 document.getElementById("ageForm").addEventListener("submit", function(event) {
            event.preventDefault();
            
            const ageInput = document.getElementById("age");
            const nameInput = document.getElementById("name");

            if (!ageInput.value || !nameInput.value) {
                alert("Please fill out all fields.");
                return;
            }

            const age = parseInt(ageInput.value);

            const promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (age >= 18) {
                        resolve();
                    } else {
                        reject();
                    }
                }, 4000);
            });

            promise.then(() => {
                alert(`Welcome, ${nameInput.value}. You can vote.`);
            }).catch(() => {
                alert(`Oh sorry ${nameInput.value}. You aren't old enough.`);
            });

            // ageInput.value = "";
            // nameInput.value = "";
        });