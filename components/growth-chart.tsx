"use client"

import { useEffect, useState } from "react"

export function GrowthChart() {
  const [animationProgress, setAnimationProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationProgress(100)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  const dataPoints = [
    { x: 2, y: 200 },
    { x: 3, y: 380 },
    { x: 4, y: 500 },
    { x: 5, y: 450 },
    { x: 6, y: 680 },
    { x: 7, y: 550 },
    { x: 8, y: 750 },
    { x: 9, y: 650 },
    { x: 10, y: 1000 },
  ]

  const chartWidth = 800
  const chartHeight = 500
  const padding = 60

  const xScale = (x: number) => padding + ((x - 2) / 8) * (chartWidth - padding * 2)
  const yScale = (y: number) => chartHeight - padding - ((y - 200) / 800) * (chartHeight - padding * 2)

  const createArrowPath = () => {
    let path = `M ${xScale(dataPoints[0].x)} ${yScale(dataPoints[0].y)}`

    for (let i = 1; i < dataPoints.length; i++) {
      path += ` L ${xScale(dataPoints[i].x)} ${yScale(dataPoints[i].y)}`
    }

    return path
  }

  const lastPoint = dataPoints[dataPoints.length - 1]
  const secondLastPoint = dataPoints[dataPoints.length - 2]
  const angle =
    Math.atan2(yScale(secondLastPoint.y) - yScale(lastPoint.y), xScale(lastPoint.x) - xScale(secondLastPoint.x)) *
    (180 / Math.PI)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              O Impacto da Contabilidade Profissional
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Veja como a assessoria contábil especializada pode transformar os resultados do seu negócio
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-auto" style={{ maxHeight: "500px" }}>
              {/* Eixo Y */}
              <line
                x1={padding}
                y1={padding}
                x2={padding}
                y2={chartHeight - padding}
                stroke="currentColor"
                strokeWidth="3"
                className="text-foreground"
              />

              {/* Seta do eixo Y */}
              <polygon
                points={`${padding},${padding - 15} ${padding - 8},${padding} ${padding + 8},${padding}`}
                fill="currentColor"
                className="text-foreground"
              />

              {/* Eixo X */}
              <line
                x1={padding}
                y1={chartHeight - padding}
                x2={chartWidth - padding}
                y2={chartHeight - padding}
                stroke="currentColor"
                strokeWidth="3"
                className="text-foreground"
              />

              {/* Seta do eixo X */}
              <polygon
                points={`${chartWidth - padding + 15},${chartHeight - padding} ${chartWidth - padding},${chartHeight - padding - 8} ${chartWidth - padding},${chartHeight - padding + 8}`}
                fill="currentColor"
                className="text-foreground"
              />

              {[200, 400, 600, 800, 1000].map((value) => (
                <g key={value}>
                  <line
                    x1={padding - 10}
                    y1={yScale(value)}
                    x2={padding}
                    y2={yScale(value)}
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-foreground"
                  />
                  <text
                    x={padding - 15}
                    y={yScale(value) + 5}
                    textAnchor="end"
                    className="text-foreground font-bold"
                    fontSize="16"
                  >
                    {value}
                  </text>
                </g>
              ))}

              {[2, 4, 6, 8, 10].map((value) => (
                <text
                  key={value}
                  x={xScale(value)}
                  y={chartHeight - padding + 25}
                  textAnchor="middle"
                  className="text-foreground font-bold"
                  fontSize="16"
                >
                  {value}
                </text>
              ))}

              <path
                d={createArrowPath()}
                fill="none"
                stroke="#dc2626"
                strokeWidth="18"
                strokeLinejoin="round"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 2000,
                  strokeDashoffset: animationProgress === 100 ? 0 : 2000,
                  transition: "stroke-dashoffset 5s ease-out",
                }}
              />

              <g
                transform={`translate(${xScale(lastPoint.x)}, ${yScale(lastPoint.y)}) rotate(${angle})`}
                style={{
                  opacity: animationProgress === 100 ? 1 : 0,
                  transition: "opacity 0.5s ease-out 4.8s",
                }}
              >
                <polygon points="0,-20 -18,15 18,15" fill="#dc2626" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
