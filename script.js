document.addEventListener('DOMContentLoaded', () => {
	const video = document.querySelector("#video")
	const captions = document.querySelectorAll("#closed-captions p")
	const player = document.querySelector('.player')
	const alarmOverlay = document.querySelector("#alarm-overlay")
	const anakinColorInput = document.getElementById('anakin-color')
	const obiwanColorInput = document.getElementById('obi-wan-color')
	const timelineButtons = document.querySelectorAll("#effects-timeline button")

	anakinColorInput.addEventListener('input', (e) => {
		document.documentElement.style.setProperty('--anakin-color', e.target.value)
	})

	obiwanColorInput.addEventListener('input', (e) => {
		document.documentElement.style.setProperty('--obiwan-color', e.target.value)
	})

	video.addEventListener("timeupdate", () => {
		const currentTime = video.currentTime

		captions.forEach(p => {
			const start = parseFloat(p.dataset.start)
			const end = parseFloat(p.dataset.end)

			if (currentTime >= start && currentTime <= end) {
				p.classList.add('active')
			} else {
				p.classList.remove('active')
			}
		})

		if (currentTime >= 121 && currentTime <= 131) {
			if (!video.classList.contains("choke")) {
				video.classList.add("choke")
			}

			setTimeout(() => {
				video.classList.remove("choke")
			}, 10000)
		}

		if (video.currentTime >= 91.25 && video.currentTime <= 91.75) {
			if (!video.classList.contains("kick")) {
				video.classList.add("kick")

				setTimeout(() => {
					video.classList.remove("kick")
				}, 500) // Match animation duration
			}
		}

		if (video.currentTime >= 165 && video.currentTime <= 166) {
			if (!video.classList.contains("force-push")) {
				video.classList.add("force-push")

				setTimeout(() => {
					video.classList.remove("force-push")
				}, 1000) // Match animation duration
			}
		}

		if (currentTime >= 174 && currentTime <= 179) {
			alarmOverlay.classList.add("alarm-active")
		} else {
			alarmOverlay.classList.remove("alarm-active")
		}

		timelineButtons.forEach(button => {
			button.addEventListener("click", () => {
				video.currentTime = parseFloat(button.dataset.time)
				video.play()
			})
		})
	})
})