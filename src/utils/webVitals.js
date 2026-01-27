/**
 * Web Vitals Reporter
 * Tracks Core Web Vitals for performance monitoring
 * 
 * Usage:
 * import { reportWebVitals } from './utils/webVitals';
 * reportWebVitals(console.log); // or send to analytics
 */

export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    }).catch(() => {
      // web-vitals not installed, silently fail
      console.warn('web-vitals package not installed. Run: npm install web-vitals');
    });
  }
};

/**
 * Send metrics to analytics service (example)
 */
export const sendToAnalytics = (metric) => {
  const body = JSON.stringify({
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    id: metric.id,
    navigationType: metric.navigationType,
  });

  // Send to your analytics endpoint
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/analytics', body);
  } else {
    fetch('/analytics', { 
      body, 
      method: 'POST', 
      keepalive: true 
    }).catch(console.error);
  }
};

/**
 * Performance observer for monitoring
 */
export class PerformanceMonitor {
  constructor() {
    this.metrics = {
      navigationTiming: {},
      resourceTiming: [],
      customMarks: {}
    };
  }

  // Mark a custom timing point
  mark(name) {
    if ('performance' in window && 'mark' in window.performance) {
      window.performance.mark(name);
    }
  }

  // Measure between two marks
  measure(name, startMark, endMark) {
    if ('performance' in window && 'measure' in window.performance) {
      try {
        const measure = window.performance.measure(name, startMark, endMark);
        this.metrics.customMarks[name] = measure.duration;
        return measure.duration;
      } catch (e) {
        console.error('Performance measurement failed:', e);
      }
    }
    return null;
  }

  // Get navigation timing
  getNavigationTiming() {
    if ('performance' in window && 'timing' in window.performance) {
      const timing = window.performance.timing;
      return {
        dns: timing.domainLookupEnd - timing.domainLookupStart,
        tcp: timing.connectEnd - timing.connectStart,
        request: timing.responseStart - timing.requestStart,
        response: timing.responseEnd - timing.responseStart,
        domParsing: timing.domInteractive - timing.domLoading,
        domReady: timing.domContentLoadedEventEnd - timing.navigationStart,
        fullLoad: timing.loadEventEnd - timing.navigationStart
      };
    }
    return null;
  }

  // Log all collected metrics
  logMetrics() {
    console.group('⚡ Performance Metrics');
    console.log('Navigation Timing:', this.getNavigationTiming());
    console.log('Custom Marks:', this.metrics.customMarks);
    console.groupEnd();
  }
}

// Create singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Auto-log metrics in development
if (process.env.NODE_ENV === 'development') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      performanceMonitor.logMetrics();
    }, 0);
  });
}
