function sortAnArrayByTwoCriteria(){
        arr.sort(twoCriteriaSort);
        arr.forEach(el => console.log(el));
      
        function twoCriteriaSort(current, next) {
          if (current.length === next.length) {
            return current.localeCompare(next);
          }
          return current.length - next.length;
        }
      }
