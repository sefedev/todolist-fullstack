class LoadingManager {
    constructor() {
      this.isLoading = false;
      this.listeners = [];
    }
  
    setLoading(state) {
      this.isLoading = state;
      this.notifyListeners();
    }
  
    getLoading() {
      return this.isLoading;
    }
  
    subscribe(listener) {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter((l) => l !== listener);
      };
    }
  
    notifyListeners() {
      this.listeners.forEach((listener) => listener(this.isLoading));
    }
  }
  
  const loadingManager = new LoadingManager();
  export default loadingManager;