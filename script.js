document.addEventListener('DOMContentLoaded', () => {
	const video = document.querySelector("#video")
	const player = document.querySelector(".player")
	const captions = document.querySelectorAll("#closed-captions p")
	const alarmOverlay = document.querySelector("#alarm-overlay")
	const anakinColorInput = document.getElementById('anakin-color')
	const obiwanColorInput = document.getElementById('obi-wan-color')
	const timelineButtons = document.querySelectorAll("#effects-timeline button")
	const questionMarks = document.querySelector('#question-marks')
	const line10 = document.querySelector('#line-10')
	const line11 = document.querySelector('#line-11')
	const line12 = document.querySelector('#line-12')

	anakinColorInput.addEventListener('input', (e) => {
		document.documentElement.style.setProperty('--anakin-color', e.target.value)
	})

	obiwanColorInput.addEventListener('input', (e) => {
		document.documentElement.style.setProperty('--obiwan-color', e.target.value)
	})

	const triggerEffect = (el, className, start, end, duration) => {
		const currentTime = video.currentTime

		if (currentTime >= start && currentTime <= end && !el.classList.contains(className)) {
			el.classList.add(className);

			if (duration) {
				setTimeout(() => {
					el.classList.remove(className);
				}, duration);
			}
		}
	}

	function handleTimedElement(element, start, end, currentTime) {
		if (currentTime >= start && currentTime <= end) {
			element.hidden = false
		} else {
			element.hidden = true
		}
	}

	video.addEventListener("timeupdate", () => {
		const currentTime = video.currentTime
		captions.forEach(p => {
			const start = parseFloat(p.dataset.start)
			const end = parseFloat(p.dataset.end)
			p.classList.toggle('active', currentTime >= start && currentTime <= end)
		})

		// Call effects
		triggerEffect(video, "choke", 121, 131, 1000)
		triggerEffect(video, "kick", 91.25, 91.75, 500)
		triggerEffect(video, "force-push", 165, 166, 1000)
		triggerEffect(player, "clash", 70, 71, 100)
		triggerEffect(player, "clash", 73.8, 91, 500)
		triggerEffect(player, "clash", 93, 120, 500)
		triggerEffect(player, "clash", 144, 145, 100)
		triggerEffect(line10, "fall-in", line10.dataset.start, line10.dataset.end, 3000)
		triggerEffect(line11, "fall-in", line11.dataset.start, line11.dataset.end, 2000)
		triggerEffect(line12, "fall-in", line12.dataset.start, line12.dataset.end, 1000)

		triggerEffect(alarmOverlay, "alarm-active", 174, 179, 1000)

		handleTimedElement(questionMarks, 42, 44, currentTime)

		timelineButtons.forEach(button => {
			button.addEventListener("click", () => {
				video.currentTime = parseFloat(button.dataset.time)
				video.play()
			})
		})
	})
})