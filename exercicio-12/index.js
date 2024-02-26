    const button = document.getElementById("newTechnology")
    const form = document.getElementById("form")
    
    button.addEventListener('click', function() {

        function removeTech() {
            form.removeChild(labelNameTech)
            form.removeChild(nameTechInput)
            form.removeChild(year1Input)
            form.removeChild(year1Label)
            form.removeChild(year2Input)
            form.removeChild(year2Label)
            form.removeChild(year3Input)
            form.removeChild(year3Label)
            form.removeChild(button2)
            form.removeChild(button3)
            form.removeChild(line)
    }


        const nameTechInput = document.createElement('input')
        nameTechInput.setAttribute('type', 'text')
        nameTechInput.setAttribute('class', 'tech')
        const labelNameTech = document.createElement('label')
        labelNameTech.innerText = 'Nome da Tecnologia: '
        const line = document.createElement('hr')

        const year1Input = document.createElement('input')
        year1Input.setAttribute('type', 'radio')
        year1Input.setAttribute('id', 'year1')
        year1Input.setAttribute('name', 'time')
        const year1Label = document.createElement('label')
        year1Label.innerText = '0-2 Anos'
        year1Label.setAttribute('for', 'year1')
        
        const year2Input = document.createElement('input')
        year2Input.setAttribute('type', 'radio')
        year2Input.setAttribute('id', 'year2')
        year2Input.setAttribute('name', 'time')
        const year2Label = document.createElement('label')
        year2Label.innerText = '3-4 Anos'
        year2Label.setAttribute('for', 'year2')

        const year3Input = document.createElement('input')
        year3Input.setAttribute('type', 'radio')
        year3Input.setAttribute('id', 'year3')
        year3Input.setAttribute('name', 'time')
        const year3Label = document.createElement('label')
        year3Label.innerText = '5+ Anos    '
        year3Label.setAttribute('for', 'year3')

        const button3 = document.createElement('button')
        button3.innerText = 'Cadastrar'
        button3.addEventListener('click', function() {
            let formInfo = []
            const devnameElement = document.getElementById('devname')
            const devname = document.getElementById('devname').value
            const name = nameTechInput.value
            const time = document.querySelector('input[name="time"]:checked')
            
            formInfo.push(devname)
            formInfo.push(name)
            formInfo.push(time)
            console.log(formInfo)
            
            devnameElement.value = ''
            nameTechInput.value = ''
            time.checked = false
            removeTech()
        })
        
        form.appendChild(labelNameTech)
        form.appendChild(nameTechInput)
        form.appendChild(year1Input)
        form.appendChild(year1Label)
        form.appendChild(year2Input)
        form.appendChild(year2Label)
        form.appendChild(year3Input)
        form.appendChild(year3Label)

        const button2 = document.createElement('button')
        button2.innerText = 'Remover'
        button2.addEventListener('click', function() {
            removeTech()
        })
        
        form.appendChild(button2)
        form.appendChild(button3)
        form.appendChild(line)
    })

    /**
     * <input type="radio" name="time" id="02Years" checked>
    <label for="02Years">-2 Anos</label>
    <input type="radio" name="time" id="34Years">
    <label for="34Years">3-4 Anos</label>
    <input type="radio" name="time" id="5OrMoreYears">
    <label for="5OrMoreYears">5+ Anos</label>
     */
