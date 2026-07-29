---
title: 'The Date Field'
description: 'Documentation about the date field in ArchiHUB'
---

The Date field (`simple-date`) provides an optimized interface for selecting exact dates, ensuring a consistent storage format (ISO) in the database.

### Field Structure

The properties available for the date field are:

**Name**:  
- **Description**: The field's label.  
- **Example**: `"Creation date"`, `"Date of entry"`.

**Destination**:  
- **Description**: Storage location within the metadata.  
- **Example**: `metadata.firstLevel.creation_date`.

**Instructions**:  
- **Description**: Optional help message about which specific date is being requested.

**Required**:  
- **Description**: Indicates whether a date must be selected.

**Condition** and **Access levels**:  
- **Description**: Allow conditionally controlling the field's visibility and restricting it based on the user's role.

![Date field configuration](/archihub.github.io/imagenes/campos/date.png)

---

### Behavior in the interface

- It prevents typical formatting errors from manual date entry (such as the confusing use of DD/MM/YYYY vs MM/DD/YYYY).
- When a date range is required, two separate `simple-date` fields are typically configured (e.g. "Start date" and "End date").

![Date field in the form](/archihub.github.io/imagenes/campos/date_form.png)
